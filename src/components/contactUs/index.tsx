import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import { headlineInverseVariant, headlineVariant } from "@/style/motions";
import HeaderText from "@/components/headerText";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const index = ({ setSelectedPage }: Props) => {

    const inputStyles = 'w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white'

    const { register, trigger, formState: { errors } } = useForm()

    const submitForm = async (e: any) => {
        const isValid = await trigger()
        
        if(!isValid)
            e.preventDefault()
    }

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
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={headlineInverseVariant}
          >
            <form
                target='_blank'
                onSubmit={(e) => submitForm(e)}
                action="https://formsubmit.co/stefan.e4e5@email.com"
                method='POST'
            >
                <input 
                    className={inputStyles}
                    type='text'
                    placeholder="NAME"
                    {...register('name', {
                        required: true,
                        maxLength: 100,
                    })}
                    >
                    {errors.name && (
                        <p className="mt-1 text-primary-500">
                            {errors.name.type === 'required' && 'This field is required.'}
                            {errors.name.type === 'maxLength' && 'Max length is 100 characters.'}
                        </p>
                    )}
                </input>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default index;
