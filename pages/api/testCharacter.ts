import { kStringMaxLength } from "buffer";
import { NextApiRequest, NextApiResponse } from "next";
import { createHandler } from "../../lib/api/handler";
import { Character, StatName } from "../../lib/types/character";

export const testCharacter: Character = {
  name: "Test Character",
  stats: [
    {
      name: StatName.STRENGTH,
      value: 15
    },
    {
      name: StatName.DEXTERITY,
      value: 19
    },
    {
      name: StatName.CONSTITUTION,
      value: 14
    },
    {
      name: StatName.INTELLIGENCE,
      value: 12
    },
    {
      name: StatName.WISDOM,
      value: 10
    },
    {
      name: StatName.CHARISMA,
      value: 11
    },
  ],
}

const handler = createHandler();

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("got request")
  return res.status(200).json(testCharacter)
})

export default handler