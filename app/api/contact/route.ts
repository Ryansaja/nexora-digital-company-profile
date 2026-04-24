import { NextResponse } from "next/server";import nodemailer from "nodemailer";import { contactSchema } from "@/components/contact-form";export async function POST(request:Request){const body=await request.json().catch(()=>null);const parsed=contactSchema.safeParse(body);if(!parsed.success)return NextResponse.json({error:"Invalid payload"},{status:400});const{name,email,company,budget,message}=parsed.data;if(process.env.SMTP_HOST&&process.env.SMTP_USER&&process.env.SMTP_PASS){const transporter=nodemailer.createTransport({host:process.env.SMTP_HOST,port:Number(process.env.SMTP_PORT||587),secure:process.env.SMTP_SECURE==="true",auth:{user:process.env.SMTP_USER,pass:process.env.SMTP_PASS}});await transporter.sendMail({from:process.env.CONTACT_FROM||process.env.SMTP_USER,to:process.env.CONTACT_TO||process.env.SMTP_USER,replyTo:email,subject:`New Nexora inquiry from ${company}`,text:`Name: ${name}
Email: ${email}
Company: ${company}
Budget: ${budget}

${message}`})}else{console.info("Contact inquiry received",{name,email,company,budget,message})}return NextResponse.json({ok:true})}
