import { NextApiRequest, NextApiResponse } from "next";
import { createHandler } from "../../lib/api/handler";
import { Campaign, SkillName, StatName } from "../../lib/types/character";


const testCampaign: Campaign = {
  skills: [
    {
      name: SkillName.ACROBATICS,
      modifier: StatName.DEXTERITY,
    },
    {
      name: SkillName.ANIMAL_HANDLING,
      modifier: StatName.WISDOM,
    },
    {
      name: SkillName.ARCANA,
      modifier: StatName.INTELLIGENCE,
    },
    {
      name: SkillName.ATHLETICS,
      modifier: StatName.STRENGTH,
    },
    {
      name: SkillName.DECEPTION,
      modifier: StatName.CHARISMA,
    },
    {
      name: SkillName.HISTORY,
      modifier: StatName.INTELLIGENCE,
    },
    {
      name: SkillName.INSIGHT,
      modifier: StatName.WISDOM,
    },
    {
      name: SkillName.INTIMIDATION,
      modifier: StatName.CHARISMA,
    },
    {
      name: SkillName.INVESTIGATION,
      modifier: StatName.INTELLIGENCE,
    },
    {
      name: SkillName.MEDICINE,
      modifier: StatName.WISDOM,
    },
    {
      name: SkillName.NATURE,
      modifier: StatName.INTELLIGENCE,
    },
    {
      name: SkillName.PERCEPTION,
      modifier: StatName.WISDOM,
    },
    {
      name: SkillName.PERFORMANCE,
      modifier: StatName.CHARISMA,
    },
    {
      name: SkillName.PERSUATION,
      modifier: StatName.CHARISMA,
    },
    {
      name: SkillName.RELIGION,
      modifier: StatName.INTELLIGENCE,
    },
    {
      name: SkillName.SLEIGHT_OF_HAND,
      modifier: StatName.DEXTERITY,
    },
    {
      name: SkillName.STEALTH,
      modifier: StatName.DEXTERITY,
    },
    {
      name: SkillName.SURVIVAL,
      modifier: StatName.WISDOM,
    },
  ]
}

const handler = createHandler();

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("got request for campaign")
  return res.status(200).json(testCampaign)
})

export default handler