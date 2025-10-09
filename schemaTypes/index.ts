import { awards } from "./awards";
import blog from "./blog";
import comment from "./comment";
import CommunityResource from "./CommunityResource";
import { contactSubmission, partnershipProposal } from "./contactUs";
import event from "./event";
import fundingOpportunity from "./fundingOpportunity";
import journal from "./journal";
import learningResource from "./learningResource";
import submission from "./submission";
import { subscriber } from "./subscriber";
import tool from "./tool";

export const schemaTypes = [blog, event, journal,  fundingOpportunity,
  tool,
  learningResource,
  CommunityResource, submission, contactSubmission,  partnershipProposal, awards, subscriber, comment]
