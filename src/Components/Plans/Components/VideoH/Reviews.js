import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

function Reviews({transparent}) {
    return (
        <div className={`${!transparent && "bg-[#000000dd]"} min-h-[20rem] flex flex-col justify-center items-center p-5`}>
            <h2 className="text-white text-3xl font-bold">Few user experience</h2>
            <div className="w-[52rem] py-16 flex justify-center items-center gap-4">
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://th.bing.com/th/id/OIG.gmAA_7GpbdFtNMZVkLTv?pid=ImgGn&w=1024&h=1024&rs=1"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                James
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                User of ultimate plan
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <div className="text-white text-2xl italic w-72">
                    <p>
                        "Was the best information in my year"
                    </p>
                </div>
            </div>
        </div>
    );
}

export { Reviews };