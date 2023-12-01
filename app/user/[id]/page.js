"use client";
import { API } from "@/app/Essential";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
// import { AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { GrStatusWarning } from "react-icons/gr";
import { BsChevronDown, BsInstagram } from "react-icons/bs";
import { FaRegComments, FaTelegramPlane, FaYoutube } from "react-icons/fa";
import Cookies from "js-cookie";
// import { FaPeopleGroup } from "react-icons/fa6";
// import { PiClockCounterClockwise } from "react-icons/pi";
const page = () => {
	const [states, setStates] = useState({
		type: "",
		count: "",
		link: "",
	});
	const [isOpen, setIsOpen] = useState(false);
	const [pop, setPop] = useState(false)

	const params = useSearchParams()
	const [id, setId] = useState("")
	const name = params.get("name")
	const details = params.get("details")
	const Likes = params.get("Likes")
	const Shares = params.get("Shares")
	const Comments = params.get("Comments")
	const offer = params.get("offer")

	console.log(id)
	console.log(offer)

	const arr = [
		details, Likes, Shares, Comments
	]

	const closeDropdown = () => {
		setIsOpen(false);
	};

	const handleminus = () => {

		setStates({ ...states, count: Number(states.count - 150) });

	};

	const handleDropdownClick = () => {
		setIsOpen(!isOpen);
	};

	const handleOptionClick = (type) => {
		setStates({ ...states, type: type });
		closeDropdown();
	};

	const handleplus = () => {

		const countValue = parseFloat(states.count) || 0;
		setStates({ ...states, count: countValue + 150 });
	};

	const sendData = async () => {
		try {
			const data = {
				SocialMedia: name,
				price: Number(discount.toFixed(2)),
				category: states.type,
				link: states.link,
				Count: states.count,
				id: id
			}
			if (!states.link || !states.count || !states.type) {
				setPop(true)
				const inters = setInterval(() => {
					setPop(false)
				}, 2000)
				return () => {
					clearInterval(inters)
				}
			} else {
				const response = await axios.post(`${API}/socialmedia`, data)
				console.log(response.data)
			}
		} catch (err) {
			console.log(err)
		}
	}

	const perPrice = 0.199
	const price = perPrice * states.count
	const caldis = price * (Number(offer) / 100)
	const discount = price - caldis
	console.log(discount)

	useEffect(() => {
		const getid = Cookies.get("id")
		if (getid) {
			const id = JSON.parse(getid)
			setId(id)
		}
	}, [id])
	return (
		<>
			{pop && <div className={`absolute flex duration-1000 justify-center items-center w-full left-0 ${pop ? "top-9" : "-top-[300px]"}  `}>
				<div className="bg-white flex text-sm text-red-700 font-semibold p-2 justify-center rounded-lg items-center shadow-md w-[300px]">
					<span className="mx-2 text-red-700"><GrStatusWarning /></span>	Please Enter Full Details !
				</div>
			</div>}
			<div className="select-none">
				<div className="grid grid-cols-1 w-full">
					<div className="flex justify-center my-8 items-center">
						<div className="sm:w-[80%] w-[95%] flex flex-col">
							{/* <div className="sm:flex sm:flex-wrap grid bg-[#E7FAFE] p-3 grid-cols-2 items-center gap-5 rounded-lg md:max-w-[80%]">
                <div
                  onClick={() => setStates({ ...states, type: "Followers" })}
                  className={`flex justify-center items-center gap-2 p-3 px-5 ${
                    states.type === "Followers"
                      ? "bg-white rounded-xl font-medium"
                      : null
                  }`}
                >
                  <div>
                    <FaPeopleGroup />
                  </div>
                  <div>Followers</div>
                </div>
                <div
                  onClick={() => setStates({ ...states, type: "Likes" })}
                  className={`flex justify-center items-center gap-2 p-3 px-5 ${
                    states.type === "Likes"
                      ? "bg-white rounded-xl font-medium"
                      : null
                  }`}
                >
                  <div>
                    <AiOutlineHeart />
                  </div>
                  <div>Likes</div>
                </div>
                <div
                  onClick={() => setStates({ ...states, type: "Stories" })}
                  className={`flex justify-center items-center gap-2 p-3 px-5 ${
                    states.type === "Stories"
                      ? "bg-white rounded-xl font-medium"
                      : null
                  }`}
                >
                  <div>
                    <PiClockCounterClockwise className="text-xl" />
                  </div>
                  <div>Stories</div>
                </div>
                <div
                  onClick={() => setStates({ ...states, type: "Views" })}
                  className={`flex justify-center items-center gap-2 p-3 px-5 ${
                    states.type === "Views"
                      ? "bg-white rounded-xl font-medium"
                      : null
                  }`}
                >
                  <div>
                    <AiOutlineEye />
                  </div>
                  <div>Views</div>
                </div>
                <div
                  onClick={() => setStates({ ...states, type: "Comments" })}
                  className={`flex justify-center items-center gap-2 p-3 px-5 ${
                    states.type === "Comments"
                      ? "bg-white rounded-xl font-medium"
                      : null
                  }`}
                >
                  <div>
                    <FaRegComments />
                  </div>
                  <div>Comments</div>
                </div>
                <div
                  onClick={() => setStates({ ...states, type: "Saves" })}
                  className={`flex justify-center items-center gap-2 p-3 px-5 ${
                    states.type === "Saves"
                      ? "bg-white rounded-xl font-medium"
                      : null
                  }`}
                >
                  <div>
                    <FaPeopleGroup />
                  </div>
                  <div>Saves</div>
                </div>
              </div> */}
							<div className="grid sm:grid-cols-5 my-3  gap-5 max-h-[100px] w-full">
								<div className="sm:col-span-3 sm:max-h-[330px] shadow-lg rounded-xl">
									<div className="bg-[#FBFCFE] rounded-t-xl p-4 font-bold text-xl">
										{name}
									</div>
									<div className="flex flex-col flex-grow rounded-b-xl  bg-white gap-7 p-4">
										<div className="flex border-2 rounded-lg w-full p-2 items-center gap-2">
											{name === "Instagram" &&
												<BsInstagram />
											}
											{name === "Facebook" &&
												<BiLogoFacebook />
											}
											{name === "Youtube" &&
												<FaYoutube />
											}
											{name === "Telegram" &&
												<FaTelegramPlane />
											}
											<input
												type="text"
												className="outline-none w-full"
												onChange={(e) =>
													setStates({ ...states, link: e.target.value })
												}
												value={states.link}

												placeholder={name ? name === "Instagram" && ("https://www.instagram.com/username") || name === "Facebook" && "https://www.facebook.com/username" || name === "Youtube" && "https://www.youtube.com/username" || name === "Telegram" && "https://www.telegram.com/username" : "Enter Your Social Media Details"}
											/>
										</div>
										<div
											className={`flex border-2 rounded-lg relative group justify-between items-center p-2 px-3 ${isOpen ? "border-blue-500" : ""
												}`}
											onClick={handleDropdownClick}
										>
											<div>{states.type || "Choose a package"}</div>
											<div>
												<BsChevronDown />
											</div>
											{isOpen && (
												<div className="absolute w-full top-11 shadow-md rounded-xl bg-white left-0">
													<div className="flex flex-col font-semibold w-full gap-4 p-3 px-5">
														{arr.map((type) => (
															<div
																key={type}
																onClick={() => handleOptionClick(type)}
															>
																{type}
															</div>
														))}
													</div>
												</div>
											)}
										</div>
										<div className="grid grid-cols-5 bg-[#EFF4FC] rounded-xl text-[#92A1BC] ">
											<div className="col-span-3 border-2 rounded-l-xl border-r-0 p-2 flex justify-between items-center">
												<div onClick={handleminus} className="text-4xl">
													-
												</div>
												<div className="flex justify-center items-center">
													<input
														type="number"
														name="number"
														onChange={(e) => {
															const newValue = e.target.value;
															if (newValue === "" || (parseFloat(newValue) > 0 && newValue !== "0")) {
																setStates({ ...states, count: newValue });
															}
														}}

														value={states.count}
														id="number"
														className="p-2 bg-transparent max-w-[100px] outline-none"
													/>
												</div>
												{/* <div>{states.count}</div> */}
												<div onClick={handleplus} className="text-4xl">
													+
												</div>
											</div>
											<div className="col-span-2 rounded-r-xl flex justify-center items-center border-2 border-l-0">
												{name == ("Instagram" || "Facebook") ? (states.type ? states.type : "Followers") : (states.type ? states.type : "Subscribers")}
											</div>

										</div>
									</div>
								</div>
								<div className="sm:col-span-2 flex flex-col w-full sm:max-w-[300px] gap-4">
									<div className="p-2 flex fle-col gap-2 shadow-md 	rounded-lg flex-col bg-white">
										<div className="flex justify-between items-center">
											<div>{states.type ? states.type : "Followers"}:</div>
											<div>{states.count ? states.count : "1000"}</div>
										</div>
										<div className="flex justify-between items-center">
											<div>Price</div>
											<div>₹ {price.toFixed(2)} </div>
										</div><div className="flex justify-between items-center">
											<div> Discounted Price</div>
											<div>
												<span className="text-xl">-</span> ₹ {caldis.toFixed(2)}

											</div>

										</div>
										<div>({offer}%) off</div>
										<div className="w-full h-1 border-dashed mt-3 border-t border-black"></div>
										<div className="flex justify-between items-center">
											<div>To pay:</div>
											<div>₹ {discount.toFixed(2)} </div>
										</div>
										<div className="bg-[#1D9BF0] text-white p-2 rounded-lg font-medium flex justify-center items-center w-full">
											<button onClick={sendData} className="w-full">Confirm the order</button>
										</div>
									</div>
									<div className="flex flex-col gap-3 rounded-xl bg-[#EFF4FC] p-4">
										<div className="text-sm font-semibold">Note</div>
										<div className="text-sm text-[#515C6B]">
											By confirming your order, you agree to the provisions
											specified in the agreement. Your Order will be acknowledge within 24 hours.
										</div>
										{/* <div className="flex items-center text-sm text-[#515C6B] gap-2">
                      <div>More Details</div>
                      <div>
                        <BsChevronDown />
                      </div>
                    </div> */}
									</div>
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
