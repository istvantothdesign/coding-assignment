interface Server {
  id: number;
  name: string;
  game: string;
  players: string;
  status: string;
  version: string;
  type: string;
  region: string;
  mods: string[];
}

// Function to fetch server data
export const fetchServerData = async (): Promise<Server[]> => {
  try {
    const response = await fetch(
      // This is for local testing
      `http://localhost:3000/api/mock`,

      // This is for production
      // `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/mock`,
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data: Server[] = await response.json();

    // Simulating a little delay so you can see the loading state as well 🙂
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return data;
  } catch (error) {
    console.error("Error fetching server data:", error);
    return [];
  }
};
