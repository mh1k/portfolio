import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const BlogsCard = () => {
  return (
    <Card className="bg-transparent p-0 overflow-hidden">
      <CardContent className="p-0">
        <div className="w-full">
          <Image
            src={
              "https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80"
            }
            width={600}
            height={500}
            alt="blog1"
            className="object-fit"
          ></Image>
        </div>
        <div className="p-2">
          <h1 className="text-[1.5rem]">Blog 1</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi,
            est!... Link
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogsCard;
