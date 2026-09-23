export async function POST(request) {
  try {
    const body = await request.json();

    const messages = body.messages;

    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response(JSON.stringify({ error: "No messages provided" }), {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    const lastMessage = messages[messages.length - 1];

    // Handle different message formats
    const userMessage =
      lastMessage.parts
        ?.filter((part) => part.type === "text")
        .map((part) => part.text)
        .join("") ||
      lastMessage.content ||
      lastMessage.text ||
      "";

    if (!userMessage.trim()) {
      return new Response(JSON.stringify({ error: "No message content" }), {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    const backendUrl = process.env.DASSDEV_AI_API_URL;

    if (!backendUrl) {
      console.error("DASSDEV_AI_API_URL environment variable is missing.");

      return new Response(
        JSON.stringify({ error: "DASS DEV AI service is not configured." }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    }

    const response = await fetch(`${backendUrl}/api/v1/chat`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        message: userMessage.trim(),
        top_k: 5,
      }),

      cache: "no-store",
    });

    if (!response.ok) {
      const errorText = await response.text();

      console.error("DASS DEV AI backend error:", response.status, errorText);

      return new Response(
        JSON.stringify({
          error: "DASS DEV AI is currently unavailable. Please try again.",
        }),
        {
          status: 502,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    }

    const data = await response.json();

    // Handle different backend response formats
    const assistantMessage =
      data.answer ||
      data.response ||
      data.message ||
      data.content ||
      JSON.stringify(data);

    // Return as JSON for compatibility
    return new Response(
      JSON.stringify({
        role: "assistant",
        content: assistantMessage,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  } catch (error) {
    console.error("DASS DEV AI route error:", error);

    return new Response(
      JSON.stringify({
        error:
          "Sorry, I couldn't reach DASS DEV AI right now. Please try again.",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }
}
