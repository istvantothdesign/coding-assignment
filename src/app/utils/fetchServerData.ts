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
  const response = await fetch("http://localhost:3000/api/mock");
  const data: Server[] = await response.json();

  // Added this to simulate a short delay so you can check out the loading state as well. 🙂
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating a 2-second delay
  return data;
};
