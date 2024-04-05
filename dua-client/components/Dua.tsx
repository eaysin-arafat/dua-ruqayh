import Image from "next/image";
import React from "react";
import { BiDetail } from "react-icons/bi";
import {
  FaCircle,
  FaCopy,
  FaPlayCircle,
  FaSave,
  FaShare,
  FaVideo,
} from "react-icons/fa";
import cardIcon from "../public/card-icon.png";

const Dua = () => {
  return (
    <section className="rounded-md bg-bgGrayColor">
      <div className="max-h-[calc(100vh-100px)] overflow-auto">
        <div className="flex items-center bg-bgWhiteColor px-5 py-5 rounded-md mb-3 rounded-tr-none">
          <h2 className="cardTitle">Section: &nbsp;</h2>
          <p>The servant is dependent on his Lord</p>
        </div>

        <div className="space-y-5">
          {[5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4].map((item) => (
            <main
              key={item}
              className="bg-bgWhiteColor px-5 py-5 flex flex-col gap-4 rounded-md"
            >
              <div className="flex items-center gap-2">
                <Image height={40} width={40} src={cardIcon} alt="allah" />
                <h2 className="cardTitle">
                  The servant is dependent on his Lord #2
                </h2>
              </div>

              <p>
                Prophet (ﷺ) used to say after every compulsory prayer, The
                servant will ask his Lord for all of his religiously and worldly
                needs, because the treasure of all things is in the hands of
                Allah. Allah says (interpretation of the meaning): “And there is
                not a thing but that with Us are its depositories, and We do not
                send it down except according to a known measure.” (Sura Al-Hijr
                15:21) No one can withhold what Allah gives; And, no one can
                give what he resists.
              </p>

              <p className="text-right">
                لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، لَهُ
                الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ،
                اَللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ وَلَا مُعْطِيَ لِمَا
                مَنَعْتَ وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ
              </p>

              <div className="">
                <h2 className="cardTitle inline">Transliteration: &nbsp;</h2>
                <p className="inline italic">
                  Laa ilaaha illallahu wahdahu laa sharika lahu, lahul-mulku wa
                  lahul-hamdu wa huwa &apos;alaa kulli shay&apos;in qadir.
                  Allaahumma laa maani&apos;a limaa a&apos;taita wa laa
                  mu&apos;tia limaa mana&apos;ta wa laa yanfa&apos;u dhal-jaddi
                  minka al-jaddu
                </p>
              </div>

              <div>
                <h2 className="inline cardTitle">Translation: &nbsp;</h2>
                <p className="inline">
                  There is none worthy of worship except Allah alone with no
                  partner or associate. He is the Dominion and to Him be all
                  praise, and He is able to do all things. O Allah, one can
                  withhold what You have given and none can give what You have
                  withheld, and no wealth or fortune can benefit anyone for from
                  You comes all wealth and fortune.
                </p>
              </div>

              <div>
                <h2 className="cardTitle">Reference:</h2>
                <p> Bukhari: 844</p>
              </div>

              <div className="flex justify-between items-center">
                <FaPlayCircle className="text-primaryColor" size={35} />

                <div className="flex gap-6 text-textGrayColor">
                  <FaCopy size={20} />
                  <FaSave size={20} />
                  <FaCircle size={20} />
                  <FaShare size={20} />
                  <BiDetail size={20} />
                </div>
              </div>
            </main>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dua;
