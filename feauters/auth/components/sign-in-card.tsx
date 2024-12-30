import { Schema, TypeOf, z } from "zod";
import {FcGoogle} from "react-icons/fc";
import {FaGithub} from "react-icons/fa";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { zodResolver} from "@hookform/resolvers/zod"

import { DottedSeparator } from "@/components/dotted-separator";

import { 
    Card,
     CardContent,
      CardHeader,
       CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"


const formSchema = z.object({
    email: z.string().trim().email(),
    password: z.string().min(1, "Requierd"),
});


 export const SignInCard = () => {

    const form = useForm<z.infer<typeof formSchema>> ({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
          password: "",
        },
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values);
    }

    return(
        <Card className="h-full w-full md:w-[487px] border-none shadow-none">
            <CardHeader className="flex items-center text-center justify-center p-7">
                <CardTitle className="text-2xl">
                    Welcome Back!
                </CardTitle>
            </CardHeader>
            <div className="px-7 mb-2 ">
                < DottedSeparator />
            </div>
            <CardContent className="p-7">
                <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      name="email"
                      control={form.control}
                      render={(field) => (
                        <FormItem>
                           <FormControl>
                              <Input 
                                {...field}
                                type="email"
                                placeholder="Enter email address"
                              />
                           </FormControl>  
                           <FormMessage/>
                       </FormItem>
                      )}
                    />
                    <FormField
                      name="password"
                      control={form.control}
                      render={(field) => (
                        <FormItem>
                           <FormControl>
                              <Input 
                                {...field}
                                type="password"
                                placeholder="Enter your password"
                              />
                           </FormControl>  
                           <FormMessage/>
                       </FormItem>
                      )}
                    />
                    <Button disabled = {false} size = "lg" className="w-full">
                        Login
                    </Button>
                    </form>
                    </Form> 

            </CardContent>
            <div className="px-7 ">
                < DottedSeparator />
            </div>
            <form/>
            <CardContent className="p-7 flex flex-col gap-y-4">

                <Button
                variant="secondary"
                size="lg"
                className="w-full"
                disabled={false}
                >
                    <FcGoogle className="mr-2 size-5"/>
                    Login with Google
                </Button>

                <Button
                variant="secondary"
                size="lg"
                className="w-full"
                disabled={false}
                >
                    <FaGithub   className="mr-2 size-5"/>
                    Login with Github
                </Button>

            </CardContent>
                <div className="px-7 ">
                    <DottedSeparator/>
                </div>
            <CardContent className="p-7 flex items-center justify-center">
                <p>
                    Don&apos;t have an account?
                    <Link href="/sign-up">
                    <span className="text-blue-600">&nbsp;sign up</span>
                    </Link>
                </p>
            </CardContent>
        </Card>
    );
    
};