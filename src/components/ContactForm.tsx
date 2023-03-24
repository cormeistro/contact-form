import styles from "./ContactForm.module.css";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// DEFINE THE FORM SCHEMA USING ZOD
const schema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email().min(1),
  message: z.string().min(1),
});

// CREATE THE TYPESCRIPT SCHEMA THAT WILL PASS INTO REACT-HOOK-FORM
type FormData = z.infer<typeof schema>;

const ContactForm = () => {
  // DESTRUCTURE THE FUNCTIONS FROM useForm IN react-hook-forms
  // PASS FORMDATA TYPE INTO useForm
  // SET THE RESOLVER TO zodResolver WHICH TAKES OUR schema DEFINED ABOVE
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  // HANDLE THE STORING OF THE DATA UPON SUBMISSION
  const onSubmit = (data: FieldValues) => {
    console.log(JSON.stringify(data));
  };

  // REGISTER FUNCTION RETURNS AN OBJECT OF HTML PROPERTIES
  // I SPREAD THEM INTO THE INPUT + TEXT AREA FIELS TO ADD ATTRIBUTES
  return (
    <div className={styles.contactForm}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Contact Us Form</h1>
        <div className={styles.inputFields}>
          <div className={styles.row}>
            <label htmlFor="firstName">First Name</label>
            <input {...register("firstName")} type="text" id="firstName" />
            {errors.firstName && (
              <p className={styles.error}>This field is required</p>
            )}
          </div>
          <div className={styles.row}>
            <label htmlFor="lastName">Last Name</label>
            <input {...register("lastName")} type="text" id="lastName" />
            {errors.lastName && (
              <p className={styles.error}>This field is required</p>
            )}
          </div>
          <div className={styles.row}>
            <label htmlFor="email">Email</label>
            <input {...register("email")} type="email" id="email" />
            {errors.email && (
              <p className={styles.error}>{errors.email.message}</p>
            )}
          </div>
          <div className={styles.row}>
            <label htmlFor="message">Message</label>
            <textarea {...register("message")} id="message" rows={5} />
            {errors.message && (
              <p className={styles.error}>This field is required</p>
            )}
          </div>
        </div>
        <button>SUBMIT</button>
      </form>
    </div>
  );
};

export default ContactForm;
