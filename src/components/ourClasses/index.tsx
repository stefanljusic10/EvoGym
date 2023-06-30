import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { headlineVariant } from "@/style/motions";
import HeaderText from "@/components/headerText";
import { OurClassType } from "@/shared/types";
import Card from "@/components/ourClasses/Card";
import { classes } from "@/data/data";
import { ReactNode } from "react";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const index = ({ setSelectedPage }: Props) => {
  const ourClassesCards: ReactNode[] = classes.map((item: OurClassType, index) => {
      return (
        <Card
          key={`${item.name}-${index}`}
          name={item.name}
          description={item.description}
          image={item.image}
        />
      );
    }
  );

  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={headlineVariant}
        >
          <div className="md:w-3/5">
            <HeaderText>OUR CLASSES</HeaderText>
            <p className="py-5">
              Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
              tellus quam porttitor. Mauris velit euismod elementum arcu neque
              facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
              enim mattis odio in risus nunc.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">{ourClassesCards}</ul>
        </div>
      </motion.div>
    </section>
  );
};

export default index;
