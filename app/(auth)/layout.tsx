import Image from "next/image";

interface AuthLayoutprops{
    children: React.ReactNode;
};



const AuthLayout = ({children}: AuthLayoutprops) =>{
    return(
        <div>
            <Image src="/logo.svg" height={50} width={100} alt="logo"/>
            {children}
        </div>
    );
};

export default AuthLayout;