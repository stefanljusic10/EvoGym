import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import { headlineVariant } from "@/style/motions";
import HeaderText from "@/components/headerText";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const index = ({ setSelectedPage }: Props) => {
  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={headlineVariant}
        >
          <HeaderText>
            <span className="text-primary-500">JOIN NOW </span>
            TO GET IN SHAPE
          </HeaderText>
          <p className="my-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
            mollitia nulla, fugit obcaecati beatae quibusdam quos explicabo
            cumque vitae ullam neque quas unde culpa maxime non? Distinctio
            vitae et, soluta accusamus blanditiis neque consequuntur beatae!
          </p>
        </motion.div>

        
      </motion.div>
    </section>
  );
};

export default index;
