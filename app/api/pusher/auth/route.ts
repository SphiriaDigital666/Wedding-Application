import { auth } from "@/auth";
import { pusherServer } from "@/lib/pusher";

export async function POST(req: Request) {
  const session = await auth()
  console.log('authenticating pusher perms...');
  const data = await req.text();
  const [socketId, channelName] = data
    .split('&')
    .map((str) => str.split('=')[1]);

  // logic to check user permissions

  const pusherData = {
    user_id: session?.user.email!,
  };

  const authResponse = pusherServer.authorizeChannel(
    socketId,
    channelName,
    pusherData
  );

  return new Response(JSON.stringify(authResponse));
}
