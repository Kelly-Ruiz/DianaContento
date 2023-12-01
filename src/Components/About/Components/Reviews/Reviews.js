import { Card, CardActionArea, CardContent, CardMedia, Typography, duration } from "@mui/material";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion"
import client1 from "./Images/client1.jpeg"
import client2 from "./Images/client2.jpeg"
import client3 from "./Images/client3.jpeg"
import client4 from "./Images/client4.jpeg"
import client5 from "./Images/client5.jpeg"
import client6 from "./Images/client6.jpeg"
import client7 from "./Images/client7.jpeg"
import client8 from "./Images/client8.jpeg"


function Reviews({ transparent }) {

    const clients = [
        {
            img: client1,
            text: "Online Client"
        },
        {
            img: client2,
            text: "Online Client"
        },
        {
            img: client3,
            text: "Online Client"
        },
        {
            img: client4,
            text: "Online Client"
        },
        {
            img: client5,
            text: "Online Client"
        },
        {
            img: client6,
            text: "Online Client"
        },
        {
            img: client7,
            text: "Online Client"
        },
        {
            img: client8,
            text: "Online Client"
        }
    ];

    const [clientIndex, setClientIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setClientIndex(clientIndex => clientIndex + 1);
        }, 5000);
        return () => clearInterval(interval);
    }, [])

    useEffect(() => {
        if (clientIndex >= clients.length)
            setClientIndex(0);
    }, [clientIndex])


    function clientCards() {
        let cards = [];
        clients.map((item, index) => {
            if (index === clientIndex) {
                cards.push(
                    <motion.div
                        key={`${index} card reviews`}
                        // custom={direction}
                        // variants={variants}
                        // initial={{opacity:0}}
                        animate={{ opacity: [0, 1, 1, 0] }}
                        // exit={{opacity:0}}
                        transition={{
                            duration: 5,
                            // opacity: { duration: 5 },
                            times: [0, 0.1, 0.9, 1],
                        }}
                        className="absolute w-full h-full"
                    >
                        <Card className="flex" sx={{ maxWidth: 345 }}>
                            <CardActionArea
                                className="relative h-[35rem] w-[20rem]"
                            >
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={item.img}
                                    alt="green iguana"
                                />
                            </CardActionArea>
                        </Card>
                    </motion.div>
                )
            }
        })

        return cards;
    }

    return (
        <div className={`${!transparent && "bg-[#000000dd]"} min-h-[20rem] flex flex-col justify-center items-center p-5`}>
            <h2 className="text-white text-3xl font-bold">Few client experiences</h2>
            <div className="w-[52rem] py-16 flex justify-center items-center gap-4">
                <AnimatePresence>
                    <div className="relative h-[35rem] w-[20rem]">
                        {
                            clientCards()
                        }
                    </div>

                    {

                        // <motion.div
                        //     key={`${1} card reviews`}
                        //     initial="enter"
                        //     animate="center"
                        //     exit="exit"
                        //     transition={{
                        //         x: { type: "spring", stiffness: 300, damping: 30 },
                        //         opacity: { duration: 0.2 }
                        //     }}
                        //     drag="x"
                        //     dragElastic={1}
                        // // transition={{ duration: 3, ease: "easeOut" }}
                        // // className={`${index != clientIndex ? "hidden" : ""}`}
                        // >
                        //     <Card className="flex" sx={{ maxWidth: 345 }}>
                        //         <CardActionArea
                        //             className="relative h-[35rem] w-[20rem] bg-black text-white"

                        //         >
                        //             <CardMedia
                        //                 className="overflow-hidden "
                        //                 component="img"
                        //                 height="140"
                        //                 image={clients[1].img}
                        //                 alt="green iguana"
                        //             />

                        //             <CardContent>
                        //                 <div className="absolute bottom-0 p-2">
                        //                     <Typography gutterBottom variant="h5" component="div">
                        //                         James
                        //                     </Typography>
                        //                     <Typography variant="body2" color="">
                        //                         User of ultimate plan
                        //                     </Typography>
                        //                 </div>
                        //             </CardContent>
                        //         </CardActionArea>
                        //     </Card>
                        // </motion.div>

                    }
                </AnimatePresence>

            </div>
            <div className="text-white text-2xl italic w-72 text-center">
                <p className="text-center">
                    Online Client
                </p>
            </div>
        </div>
    );
}

export { Reviews };