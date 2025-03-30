import React from "react";
import Tile from "./tile";

export default function Tiles() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
      <Tile day={1} image="/images/1.JPG" href="/day/1-ubwad" />
      <Tile day={2} image="/images/20.JPG" href="/day/2-iniwa" />
      <Tile day={3} image="/images/3.JPG" href="/day/3-aiwhd" />
      <Tile day={4} image="/images/4.JPG" href="/day/4-cioao" />
      <Tile day={5} image="/images/5.JPG" href="/day/5-wioaw" />
      <Tile day={6} image="/images/6.jpg" href="/day/6-ioanm" />
      <Tile day={7} image="/images/7.jpg" href="/day/7-lcjzi" />
      <Tile day={8} image="/images/8.jpg" href="/day/8-msuie" />
      <Tile day={9} image="/images/9.jpg" href="/day/9-ytwgo" />
      <Tile day={10} image="/images/10.jpg" href="/day/10-pozij" />
      <Tile day={11} image="/images/11.jpg" href="/day/11-zjzqo" />
      <Tile day={12} image="/images/12.JPG" href="/day/12-zlcjo" />
      <Tile day={13} image="/images/13.JPG" href="/day/13-lkjhh" />
      <Tile day={14} image="/images/14.JPG" href="/day/14-owiad" />
      <Tile day={15} image="/images/15.JPG" href="/day/15-vnisa" />
      <Tile day={16} image="/images/16.JPG" href="/day/16-mznja" />
      <Tile day={17} image="/images/17.JPG" href="/day/17-powad" />
      <Tile day={18} image="/images/18.JPG" href="/day/18-mlajs" />
      <Tile day={19} image="/images/19.JPG" href="/day/19-kauza" />
      <Tile day={20} image="/images/2.JPG" href="/day/20-qerya" />
    </div>
  );
}
