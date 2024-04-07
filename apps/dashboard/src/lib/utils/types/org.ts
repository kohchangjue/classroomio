export interface CurrentOrg {
  id: string;
  name: string;
  shortName: string;
  siteName: string;
  avatar_url: string;
  memberId: string;
  role_id: string;
  landingpage: {
    [key: string]: unknown;
  };
  theme: string;
  organization_plan: {
    subscriptionId: string;
    plan_name: string;
    is_active: boolean;
  }[];
}

export interface OrgTeamMember {
  id: number;
  email: string;
  verified: boolean;
  profileId?: string;
  fullname: string;
  role: string;
  isAdmin: boolean;
}

export interface OrgAudience {
  id: string;
  name: string;
  email: string;
  avatar_url: string;
  date_joined: string;
}
