"use client";
import { authClient } from "@/lib/auth-client";
import { Check, Target } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { GrGoogle } from "react-icons/gr";
import { TbPackage } from "react-icons/tb";
import { toast } from "react-toastify";


export default function SignInPage() {
  const onSubmit = async (e) => {
    e.preventDefault();

    const email= e.target.email.value;
    const password= e.target.password.value;

    // console.log({name,image,email,password}, "Aije amar data gula");

    const {data,error}=await authClient.signIn.email({
        email,
        password,
        // callbackURL: '/'
        
    })

    console.log(data,error, "Aije amar data and error");

    if(error){
        // alert(error.message)
        toast.error(error.message);
    }

    if(data){
        // alert("Login Successful");
        toast.success("Login Successful");
        window.location.href="/"
        
    }

  };

  const handleGoogleSignIn=async ()=>{
    
        await authClient.signIn.social({
          provider: "google",
      });
  }

  return (
    <Card className="border-y-2 shadow-md border-orange-400 mx-auto w-70 md:w-100 lg:w-125 py-1 lg:py-10 mt-5">
      <h1 className="text-center text-2xl font-bold">Welcome to <span className='text-[#FF9F1C] '>Suncart</span></h1>
    <p className="text-center mb-5">Log In to experience the warmth of premium summer essentials.</p>

      <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
       

        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }

            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <div className="flex gap-2">
          <Button type="submit" className='bg-[#FF9F1C]'>
            <Check />
            Login
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
      </Form>
      
       <p className="text-center">If you dont have an account. Please <Link className="text-blue-500" href={'/register'}>Register</Link></p>  
      <p className="text-center">Or</p>

      <Button onClick={handleGoogleSignIn}  className={'text-center mx-auto w-full'}><GrGoogle></GrGoogle> Sign in with Google</Button>

    </Card>
  );
}