import { cn } from "@/lib/utils";

interface DottedSeparatorprops{
    className?: string;
    color?: string;
    height?: string;
    dotSize?: string;
    gapSize?: string;
    direction?: "horizontal" | "vertical"; 
};


export const DottedSeparator = ({
    className,
    color = "#d4d4d8",
    height = "2px",
    dotSize = "2px",
    gapSize = "6px",
    direction = "horizontal",


}: DottedSeparatorprops) => {
 const isHorizontal = direction === "horizontal";
 return(

  <div className={cn(
    isHorizontal ? "w-full flex items-center " : "h-full flex items-center flex-col",
    className,
  )}>
    <div 
      className={isHorizontal ? "flex-grow" : "flex-grow-0"}
      style={{
        width: isHorizontal ? "100%" : height,
        height: isHorizontal ? height : "100%",
        backgroundImage: `radical-gradient(circle, ${100}25%, transparent)`,
        backgroundSize: isHorizontal
           ? `${parseInt(dotSize) +  parseInt(gapSize)}px ${height}`
           : `${height} ${parseInt(dotSize) + parseInt(gapSize)}px`,
        backgroundRepeat: isHorizontal ? "repeat-x" : "repeat-y",
        backgroundPosition: "center", 
      }}
    
    />
  </div>    
 );
};