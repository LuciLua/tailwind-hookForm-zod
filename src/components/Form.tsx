'use client'
import { useState } from "react";
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { AiOutlineMail, AiOutlineUser } from "react-icons/ai"
import { MdPassword } from "react-icons/md"

// Schema: representacao de uma estrutura de dados
const createUserFormSchema = z.object({
    name: z.string()
        .nonempty('O nome é obrigatório')
        .transform(name => {
            return name.trim().split(' ').map(word => {
                return word[0].toLocaleUpperCase().concat(word.substring(1))
            }).join(' ')
        })
    ,
    email: z.string()
        .nonempty('O email é obrigatório')
        .email('Formato de Email inválido')
        .toLowerCase()
        .refine(email => {
            return email.endsWith('@gmail.com')
        }, 'Aceita somente @gmail')
    ,
    password: z.string()
        .min(6, 'A Senha precisa ter no mínimo 6 caracteres')
})

type CreateUserFormData = z.infer<typeof createUserFormSchema>

function Form() {

    const { register,
        handleSubmit,
        formState: { errors } } = useForm<CreateUserFormData>({
            resolver: zodResolver(createUserFormSchema)
        });
    const [output, setOutput] = useState<String>('')


    console.log(errors)

    function createUser(data: any) {
        setOutput(JSON.stringify(data, null, 2))
    }

    return (
        <form
            onSubmit={handleSubmit(createUser)}
            action=""
            className="flex flex-col max-w-[350px] p-3 gap-6 w-full bg-slate-100 py-10 px-5 rounded-lg shadow-lg">
            <div className="w-full gap-2 flex flex-col relative">
                <AiOutlineUser className="absolute top-1" />
                <label htmlFor="name" className="w-full text-gray-600 ml-7">Name</label>
                <input
                    type="text"
                    className="w-full focus:outline-gray-300 px-4 py-2 bg-slate-50 border-none"
                    {...register('name')}
                />
                {errors.name && <span className="text-gray-400 font-[300]">{errors.name.message}</span>}
            </div>
            <div className="w-full gap-2 flex flex-col relative">
                <AiOutlineMail className="absolute top-1" />
                <label htmlFor="email" className="w-full text-gray-600 ml-7">E-mail</label>
                <input
                    type="text"
                    className="w-full focus:outline-gray-300 px-4 py-2 bg-slate-50 border-none"
                    {...register('email')}
                />
                {errors.email && <span className="text-gray-400 font-[300]">{errors.email.message}</span>}
            </div>
            <div className="w-full gap-2 flex flex-col relative">
                <MdPassword className="absolute top-1" />
                <label htmlFor="email" className="w-full text-gray-600 ml-7">Senha</label>
                <input
                    type="password"
                    className="w-full focus:outline-gray-300 px-4 py-2 bg-slate-50 border-none"
                    {...register('password')}
                />
                {errors.password && <span className="text-gray-400 font-[300]">{errors.password.message}</span>}
            </div>
            <button
                type="submit"
                className="bg-emerald-600 h-10 text-white rounded hover:bg-emerald-700 transition-[0.3s] outline-emerald-800">Enviar</button>
            <pre>{output}</pre>
        </form>
    )
}

export default Form