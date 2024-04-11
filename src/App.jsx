import { useState, useEffect } from "react";
import "./App.css";
import cn from "classnames";
import BitzzardButton from "./components/Button/index.jsx";
import TopHeader from "./components/TopHeader";
import FullScreenScroller from "@torc/react-fullscreen-scroller";
import "@torc/react-fullscreen-scroller/dist/index.css";
import logo2 from "@/assets/logo2.png";
import logo21 from "@/assets/logo2-1.png";

import bt from "@/assets/bt.png";
import b4 from "@/assets/b4.png";
import b3 from "@/assets/b3.png";
import l1 from "@/assets/l1.png";
import l2 from "@/assets/l2.png";
import l3 from "@/assets/l3.png";

import { useNavigate } from "react-router-dom";

import { Button, Modal } from "antd";

function App() {
    const navigate = useNavigate();
    const [isPC, setIsPC] = useState(true);
    const [imgUrl, setImgUrl] = useState(logo2);
    const changeDeviceType = () => {
        console.log('123')
        if (
            /Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent)
        ) {
            setIsPC(false);
        } else {
            setIsPC(true);
        }
    }

    useEffect(() => {
        changeDeviceType()
    }, [isPC]);

    return (
        <div className={isPC ? "PCAPP" : "MobileApp"}>
            <TopHeader/>
            <FullScreenScroller desktopBreakPoint={768} controls={false}>
                <div className="fullPage page1 flexCenter">
                    <div className="content1 ">
                        <div className="tc logo2img">
                            {/* <img className='logo2img' src={imgUrl} alt="" /> */}
                        </div>
                        <div className="bt2" style={{margin: "16px auto 64px"}}>
                            BitmapWar unfolds as an epic saga within the ever-expansive
                            Bitverse, a digital realm crafted on the immutable foundation of
                            blockchain's decentralized power. In this grand narrative, players
                            are thrust into a dynamic and evolving world, where the clash of
                            factions becomes a symphony of power and strategy.
                        </div>
                        <div className="flexCenter">
                            <BitzzardButton text="play" href="http://unity.bitmapwar.com/"></BitzzardButton>
                            <BitzzardButton
                                text="doc"
                                type="light"
                                style={{marginLeft: "16px"}}
                                href="https://bitmapwar.bitzarrd.xyz/"
                            ></BitzzardButton>
                        </div>
                    </div>
                </div>

                <div className="fullPage page2">
                    <div className="flexCenter wh100">
                        <div className="content2 flexColumnCenter">
                            <div className="tc logo3img">
                                {/* <img src={bt} width={isPC? "25%" :'80%'} alt="" /> */}
                            </div>
                            <div className="bt3" style={{margin: "16px 0 64px"}}>
                                As denizens of this blockchain-powered universe, participants
                                align themselves with one of four vibrant factions – Red, Blue,
                                Green, or Purple. The choices made echo beyond mere gameplay,
                                contributing to the intricate tapestry of the Bitverse's lore.
                                The ongoing factional warfare becomes a reflection of the larger
                                struggle for dominance and influence in this ever-shifting
                                digital landscape.
                            </div>
                            <div className='sfclass'>
                                <BitzzardButton text="Tokennomics" type="dark"
                                                href={"https://litepaper.bitzarrd.xyz/economics/economics"}></BitzzardButton>
                                <BitzzardButton
                                    text="swap"
                                    type="dark"
                                    style={{margin: "0 16px", color: "grey"}}
                                ></BitzzardButton>
                                <BitzzardButton text="Chart" type="dark" style={{color: "grey"}}></BitzzardButton>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fullPage page3">
                    <div className="content3 sfclass">
                        <div className="sw50 flexCenter">
                            <img src={b4} width="96" alt=""/>
                        </div>
                        <div className="sw50">
                            <div className="bt4">Blue Wand</div>
                            <div className="bt5" style={{margin: "8px 0"}}>
                                Power, duty, worldbuilding
                            </div>

                            <div className="bt6" style={{margin: "8px 0 48px"}}>
                                Blue Wand symbolizes the balance of power and duty for its
                                holders, who shape the Bitverse world's future while gaining
                                special in-game abilities and economic benefits through $BTZD
                                token allocation.
                            </div>
                            <BitzzardButton text="buy"
                                            href={"https://brc420.io/market?tick=59495f899acc4f7f3070af85cd107111c28b96886efaf3ae5d780fa808305122i0"}></BitzzardButton>
                        </div>
                    </div>
                </div>

                <div className="fullPage page4">
                    <div className="content3 sfclass2">

                        <div className="sw50">
                            <div className="bt4">Bitmap Underworld</div>

                            <div className="bt6" style={{margin: "8px 0 48px"}}>
                                An endless abyss world composed of Bitmaps, where everyone can
                                build their own dungeons or become adventurers.
                            </div>
                            <BitzzardButton text="Coming soon"></BitzzardButton>
                        </div>
                        <div className="sw50 flexCenter">
                            <img src={b3} width="75%" style={{margin: '48px auto'}} alt=""/>
                        </div>

                    </div>
                    <div className="footer flexCenter">
                        <a href="https://twitter.com/Bitzarrd" target={"_blank"}>
                            <img src={l1} width="48" alt=""/>
                        </a>
                        <a href="https://discord.gg/Kvu4DhDbBy" target={"_blank"} style={{margin: "0 64px"}}>
                            <img src={l2} width="48" alt=""/>
                        </a>
                        <a href="https://t.me/Bitzarrd_Community" target={"_blank"}>
                            <img src={l3} width="20" alt=""/>
                        </a>
                    </div>
                </div>
            </FullScreenScroller>
        </div>
    );
}

export default App;
