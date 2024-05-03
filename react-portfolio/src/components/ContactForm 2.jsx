import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
export default function ContactForm() {
  return (
      <Card
        className="bg-gradient-to-b from-green-900/40 to-neutral-50/40 p-4 rounded-xl"
        color="transparent"
        shadow={false}
      >
        <Typography variant="h4" color="blue-gray">
          Contact Me:
        </Typography>
        <Typography className="pt-4 items-center gap-3 flex justify-start" variant="h5" color="blue-gray">
          <AiOutlineMail size={20}>
            </AiOutlineMail>jocollette2@gmail.com
        </Typography>
        <Typography className="pt-3 items-center gap-3 flex justify-start" variant="h5" color="blue-gray">
            <AiOutlinePhone size={20}>
            </AiOutlinePhone>
          804-837-7181
        </Typography>
        
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
          </div>
        </form>
      </Card>
    
  );
}
