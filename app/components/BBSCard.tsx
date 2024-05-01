import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import React from 'react'

function BBSCard() {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>Deploy your new project in one-click.</CardDescription>
        </CardHeader>
        <CardContent>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, unde cumque porro ratione delectus nostrum recusandae deserunt iusto tenetur consequatur, velit fugit, nihil esse voluptate suscipit optio eos iste rem?
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href={"/bbs-posts/1"} className="text-blue-500">Read More</Link>
        </CardFooter>
      </Card>
    </div>
  )
}

export default BBSCard