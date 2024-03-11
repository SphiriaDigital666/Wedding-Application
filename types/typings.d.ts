interface SidebarOption {
  id: number;
  name: string;
  href: string;
  // Icon: Icon;
}

type TopRecommendation =
  | {
      profile: UserProfile;
      score: number;
    }[]
  | undefined;

  interface ExtendedMessage extends Message {
    senderImg: string;
    senderName: string;
  }