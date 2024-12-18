import Link from "next/link";
import {FcGoogle} from "react-icons/fc";
import {FaGithub} from "react-icons/fa";


import { DottedSeparator } from "@/components/dotted-separator";
import {                        
    Card,
     CardContent,
      CardDescription,
      CardHeader,
       CardTitle} from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


 export const SignUpCard = () => {
    return(
        <Card className="h-full w-full md:w-[487px] border-none shadow-none">
            <CardHeader className="flex items-center text-center justify-center p-7">
                <CardTitle className="text-2xl">
                    Sign Up
                </CardTitle>
                <CardDescription>
                    By signing up, you agree to out {""}
                </CardDescription>
                <Link href="/privacy">
                <span className = "text-blue-700">Privacy Policy</span>
                </Link>
            </CardHeader>
            <div className="px-7 ">
                < DottedSeparator />
            </div>
            <CardContent className="p-7">
                <form className="space-y-4">
                    <Input 
                    required
                    type="email"
                    value={""}
                    onChange={() => {}}
                    placeholder="Enter email address"
                    disabled={false}
                    />
                    <Input 
                    required
                    type="password"
                    value={""}
                    onChange={() => {}}
                    placeholder="Enter password"
                    disabled={false}
                    min = {8}
                    max = {256}
                    />
                    <Button disabled = {false} size = "lg" className="w-full">
                        Login
                    </Button>
                    
                </form> 

            </CardContent>
            <div className="px-7 ">
                < DottedSeparator />
            </div>
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
        </Card>
    );
    
};