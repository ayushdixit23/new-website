"use client";
import { API } from "@/app/Essential";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiTwotoneLock } from "react-icons/ai";
const page = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [cpassword, setCpassword] = useState("");
	const router = useRouter();

	const handleUser = async () => {
		try {
			const user = {
				email: email,
				password: password,
			};
			if (cpassword === password) {
				const res = await axios.post(`${API}/users/signup`, user);

				if (res.data.success) {
					router.push("/user/login");
				}
			}
		} catch (e) {
			console.log(e, "e");
		}
	};

	console.log(email, password, cpassword);
	return (
		<>
			<div className="min-h-[40vh] select-none sm:min-h-[50vh] md:min-h-[70vh] my-3 pn:max-sm:p-3 flex justify-center items-center">
				<div className="flex items-center shadow-lg rounded-lg p-5 w-full md:w-[35%] sm:max-md:max-w-[600px]">
					<div className="flex flex-col w-full">
						<div className="flex flex-col gap-1">
							<div className="text-2xl font-bold">Welcome 👋 </div>
							<div>Please enter your details.</div>
						</div>
						<div>
							<div className="flex flex-col gap-5 my-5">
								<div className="flex w-full p-2 items-center rounded-lg border gap-1">
									<div className="text-lg">@</div>
									<div>
										<input
											value={email}
											onChange={(e) => setEmail(e.target.value)}
											type="email"
											placeholder="Email"
											className=" outline-none px-1 w-full"
										/>
									</div>
								</div>
								<div className="flex w-full p-2 items-center rounded-lg border gap-1">
									<div>
										<AiTwotoneLock className="text-xl" />
									</div>
									<div>
										<input
											value={password}
											onChange={(e) => setPassword(e.target.value)}
											type="password"
											placeholder="Password"
											className="outline-none px-1 w-full"
										/>
									</div>
								</div>
								<div className="flex w-full p-2 items-center rounded-lg border gap-1">
									<div>
										<AiTwotoneLock className="text-xl" />
									</div>
									<div>
										<input
											value={cpassword}
											onChange={(e) => setCpassword(e.target.value)}
											type="password"
											placeholder="Confirm Password"
											className="outline-none px-1 w-full"
										/>
									</div>
								</div>
								{/* <div className="flex justify-between items-center">
									<div className="flex items-center gap-1">
										<div>
											<input type="checkbox" />
										</div>
										<div className="text-sm">Save Password</div>
									</div>
									<div className="underline text-sm">Forgot password</div>
								</div> */}
								<div className="w-full  rounded-lg">
									<button
										onClick={handleUser}
										className="p-3 w-full bg-[#1D9BF0]  rounded-lg text-white"
									>
										Sign Up
									</button>
								</div>
								<div className="flex justify-center gap-1 text-sm items-center">
									Don’t have in account?{" "}
									<span className="font-semibold cursor-pointer underline">
										<Link href="/user/login">Log In</Link>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default page;
