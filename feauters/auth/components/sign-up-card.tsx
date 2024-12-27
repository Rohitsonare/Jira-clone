import Link from "next/link";
import { Schema, TypeOf, z } from "zod";
import {FcGoogle} from "react-icons/fc";
import {FaGithub} from "react-icons/fa";
import { useForm } from "react-hook-form";
import { zodResolver} from "@hookform/resolvers/zod"


import { DottedSeparator } from "@/components/dotted-separator";
import {                        
    Card,
     CardContent,
      CardDescription,
      CardHeader,
       CardTitle} from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button";

const formSchema = z.object({
    name: z.string().trim().min(1, " required "),
    email: z.string().trim().email(),
    password: z.string().min(8, "Minimum 8 characters required"),
});

    
 export const SignUpCard = () => {
    const form = useForm<z.infer<typeof formSchema>> ({
            resolver: zodResolver(formSchema),
            defaultValues: {
              name : "",
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
                    Sign Up 
                </CardTitle>
                <CardDescription>
                    By signing up, you agree to out {""}
                <Link href="/Privacy">
                <span className = "text-blue-600 ">Privacy Policy</span>
                </Link>{""} and {""}
                <Link href="/terms">
                <span className = "text-blue-600">Terms of service</span>
                </Link>
                </CardDescription>
              </CardHeader>
            <CardContent className="p-7">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      name="name"
                      control={form.control}
                      render={(field) => (
                        <FormItem>
                           <FormControl>
                              <Input 
                                {...field}
                                type="Name"
                                placeholder="Enter your name"
                              />
                           </FormControl>  
                           <FormMessage/>
                       </FormItem>
                      )}
                    />
                        <div className="px-7 ">
                            < DottedSeparator />
                        </div>
                        <FormField
                      name="email"
                      control={form.control}
                      render={(field) => (
                        <FormItem>
                           <FormControl>
                              <Input 
                                {...field}
                                type="email"
                                placeholder="Enter your address"
                              />
                           </FormControl>  
                           <FormMessage/>
                       </FormItem>
                      )}
                    />
                        <div className="px-7 ">
                            < DottedSeparator />
                        </div>
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
                        <div className="px-7 mb-2">
                            < DottedSeparator />
                        </div>
                        <Button disabled = {false} size = "lg" className="w-full">
                            Login
                        </Button>
                        
                    </form> 
                    </Form>

            </CardContent>
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
                    Already have an account?
                    <Link href="/sign-in">
                    <span className="text-blue-600">&nbsp;sign in</span>
                    </Link>
                </p>
            </CardContent>
        </Card>
    );
    
};