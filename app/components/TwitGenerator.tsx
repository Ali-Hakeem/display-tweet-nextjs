"use client";
import React, { useState } from 'react'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FaRegComment, FaRegBookmark, FaRetweet, FaRegHeart } from 'react-icons/fa';
import { FiShare, FiBarChart2 } from 'react-icons/fi';
import { format } from 'date-fns';
import Image from 'next/image';
import { mdiRepeat  } from '@mdi/js';
import Icon from '@mdi/react';

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  

export default function TwitGenerator() {
    const [name, setName] = useState('Jo!');
    const [userName, setUserName] = useState('jowashere');
    const [twit, setTwit] = useState('Lorem ipsum ?')
    const [duration, setDuration] = useState('21h');
    const [time, setTime] = useState('11:08');
    const [date, setDate] = useState('May 12, 2024');
    const formattedDate = date ? format(new Date(date), 'd MMMM yy') : '';
    const [comment, setComment] = useState('65')
    const [retweet, setRetweet] = useState('31')
    const [quotes, setQuotes] = useState('29')
    const [like, setLike] = useState('102')
    const [view, setView] = useState('3k')
    const [bookmarks, setBookmarks] = useState('200')
  
  return (
    <div className="relative z-10 text-white mx-6 flex max-w-[1250px] w-full min-h-[700px] h-full">
        <Card className="flex-1 flex flex-col w-full h-auto mx-auto bg-white backdrop-blur-md border-2 rounded-xl">
            <CardHeader>
                <CardTitle className="text-2xl text-center font-black">Display Tweet Generator</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
                <div className="h-full flex flex-col md:flex-row gap-8">
                    <div className="flex-2 space-y-2">
                        <Label>Name : </Label>
                        <Input
                            value={name}
                            onChange={e => setName(e.target.value)}
                            className="border-black"
                            placeholder={name}
                            maxLength={50}
                            minLength={15}
                        />
                        <div className="flex-2 space-y-2">
                            <Label>Username : </Label>
                            <Input
                                value={userName}
                                onChange={e => setUserName(e.target.value)}
                                className="border-black"
                                placeholder={userName}
                                maxLength={15}
                                minLength={4}
                            />
                        </div>
                        <div className="flex-2 space-y-2">
                            <Label>Time : </Label>
                            <div className="flex space-x-1">
                                <Input
                                    value={duration}
                                    onChange={e => setDuration(e.target.value)}
                                    className="border-black"
                                    placeholder={duration}
                                />
                                <Input
                                    value={time}
                                    onChange={e => setTime(e.target.value)}
                                    className="border-black"
                                    placeholder={time}
                                />
                                <Input
                                type="date"
                                    value={date}
                                    onChange={e => setDate(e.target.value)}
                                    className="border-black"
                                    placeholder={date}
                                />
                            </div>
                        </div>
                        <div className="flex space-x-1">
                            <div className="flex-2">
                                <Label>Comment: </Label>
                                <Input
                                    value={comment}
                                    onChange={e => setComment(e.target.value)}
                                    className="border-black"
                                    placeholder={comment}
                                    maxLength={5}
                                    minLength={0}
                                />
                            </div>
                            <div className="flex-2">
                                <Label>RT: </Label>
                                <Input
                                    value={retweet}
                                    onChange={e => setRetweet(e.target.value)}
                                    className="border-black"
                                    placeholder={retweet}
                                    maxLength={5}
                                    minLength={0}
                                />
                            </div>
                            <div className="flex-2">
                                <Label>Like: </Label>
                                <Input
                                    value={like}
                                    onChange={e => setLike(e.target.value)}
                                    className="border-black"
                                    placeholder={like}
                                    maxLength={5}
                                    minLength={0}
                                />
                            </div>
                            <div className="flex-2">
                                <Label>Quotes: </Label>
                                <Input
                                    value={quotes}
                                    onChange={e => setQuotes(e.target.value)}
                                    className="border-black"
                                    placeholder={quotes}
                                    maxLength={5}
                                    minLength={0}
                                />
                            </div>
                        </div>
                        <div className="flex space-x-1">
                            <div className="flex-2">
                                <Label>View: </Label>
                                <Input
                                    value={view}
                                    onChange={e => setView(e.target.value)}
                                    className="border-black"
                                    placeholder={view}
                                    maxLength={5}
                                    minLength={0}
                                />
                            </div>
                            <div className="flex-2">
                                <Label>Bookmarks: </Label>
                                <Input
                                    value={bookmarks}
                                    onChange={e => setBookmarks(e.target.value)}
                                    className="border-black"
                                    placeholder={bookmarks}
                                    maxLength={5}
                                    minLength={0}
                                />
                            </div>
                        </div>
                        <div className="flex-2 space-y-2">
                            <Label>Tweet : </Label>
                            <Textarea
                                value={twit}
                                onChange={e => setTwit(e.target.value)}
                                className="border-black"
                                placeholder={twit}
                                maxLength={280}
                                minLength={1}
                            />
                        </div>
                    </div>
                    <Card className="relative flex flex-row md:flex-row sm:flex-row bg-black rounded-lg p-4 space-x-2">
                        <Image 
                            src="/user.png"
                            alt="Descriptive alt text"
                            width={48}
                            height={48}
                            className="h-9 w-9 rounded-full"
                        />

                        <div className="flex-1">
                            <div className="flex mt-[-7px] items-center justify-between">
                                <div>
                                    <p><span  className="text-white text-xs font-semibold">{name ? name.length > 15 ? name.slice(0, 13) + '…' : name : 'Insert a name'}</span><span className="text-gray-500 text-xs font-normal lowercase"> @{userName ? userName : 'Insert a username'} · <span className="text-xs">{duration ? duration : 'insert duration (1h)'}</span></span></p>
                                </div>
                                <div className="flex items-center mt-[1px]">
                                    <span className="text-gray-500 text-sm transform rotate-90">···</span>
                                </div>
                            </div>
                            <p className="mt-[-3px] text-white text-xs whitespace-pre-line break-words">
                                {twit ? twit : 'insert a dummy twit'}
                            </p>
                            <div className="flex justify-between w-full text-gray-500 text-[11.5px] mt-2">
                                <button className="flex items-center space-x-[1.5px] hover:text-blue-400">
                                    <FaRegComment />
                                    <span>{comment ? comment : '\u00A0\u00A0\u00A0\u00A0'}</span>
                                </button>
                                <div className="flex items-center space-x-[1.5px] text-xs hover:text-green-500 cursor-pointer">
                                    <Icon path={mdiRepeat } size={0.6} className="transform rotate-90 "/>
                                    <span>{retweet ? retweet : '\u00A0\u00A0\u00A0\u00A0'}</span>
                                </div>
                                <button className="flex items-center space-x-[1.5px] hover:text-pink-500">
                                    <FaRegHeart />
                                    <span>{like ? like : '\u00A0\u00A0\u00A0\u00A0'}</span>
                                </button>
                                <button className="flex items-center space-x-[1.5px]">
                                    <FiBarChart2  />
                                    <span>{view ? view : '\u00A0\u00A0\u00A0\u00A0'}</span>
                                </button>
                                <button className="flex items-center space-x-[7px]  hover:text-blue-400">
                                    <FaRegBookmark  />
                                    <FiShare  />
                                </button>
                            </div>
                        </div>
                    </Card>

                    <Card className="relative flex flex-row md:flex-row sm:flex-row bg-black rounded-lg p-4 space-x-2">
                        <Image 
                            src="/user.png"
                            alt="Descriptive alt text"
                            width={48}
                            height={48}
                            className="h-9 w-9 rounded-full"
                        />

                        <div className="flex-1">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-white text-xs mt-[2px] font-semibold">{name ? name.length > 20 ? name.slice(0, 20) + '…' : name : 'Insert a name'}</p>
                                    <p className="text-gray-500 text-xs lowercase">@{userName ? userName : 'Insert a username'}</p>
                                </div>
                                <div className="flex items-center space-x-2 mt-[-15px]">
                                    <button className="bg-gray-50 text-black text-xs py-[0.8px] px-[12px] rounded-full font-semibold">
                                    Follow
                                    </button>
                                    <span className="text-gray-500 text-sm transform rotate-90">···</span>
                                </div>
                            </div>

                            <p className="ml-[-43px] text-white text-xs mt-3 whitespace-pre-line break-words">
                            {twit ? twit : 'insert a dummy twit'}
                            </p>

                            <p className="ml-[-43px] text-gray-500 text-xs mt-3">
                            {time ? time : 'insert time'} · {formattedDate ? formattedDate : 'No date selected'} · <span className="font-semibold text-white">{view ? view : 'No view'}</span> Views
                            </p>
                            <hr className="ml-[-43px] border-gray-500/60 text-xs mt-2 mb-2"/>
                            <div className="flex space-x-1">
                                {/* summary */}
                                <span className="font-semibold ml-[-43px] text-white text-xs">{retweet ? retweet : '\u00A0\u00A0'} <span className="text-gray-500 text-xs mr-2"> Repost</span></span>
                                <span className="font-semibold flex text-white text-xs">{quotes} <span className="ml-1 text-gray-500 text-xs mr-2"> Quotes</span></span>
                                <span className="font-semibold flex text-white text-xs"><span>{like ? like : '\u00A0\u00A0'}</span> <span className="ml-1 text-gray-500 text-xs"> Likes</span></span>
                            </div>
                            
                            <hr className="ml-[-43px] border-gray-500/60 text-xs mt-2"/>
                                {/* bookmarks */}
                                <span className="font-semibold ml-[-43px] text-white text-xs">{bookmarks ? bookmarks : '\u00A0\u00A0'} <span className="text-gray-500 text-xs mr-2"> Bookmarks</span></span>
                            <hr className="ml-[-43px] border-gray-500/60 text-xs mt-2"/>

                            <div className="ml-[-43px] grid grid-flow-col auto-cols-auto gap-[30px] text-gray-500/80 text-xs mt-2">
                                <button className="flex-auto items-center space-x-1 hover:text-blue-400">
                                    <FaRegComment />
                                </button>
                                <div className="flex-auto items-center space-x-1 text-xs hover:text-green-500 cursor-pointer">
                                    <Icon path={mdiRepeat } size={0.7} className="transform rotate-90 "/>
                                </div>
                                <button className="flex-auto items-center space-x-1 hover:text-pink-500">
                                    <FaRegHeart />
                                </button>
                                <button className="flex-auto items-center space-x-1">
                                    <FaRegBookmark  />
                                </button>
                                <button className="flex-auto items-center space-x-[8px] mr-[-50px]  hover:text-blue-400">
                                    <FiShare  />
                                </button>
                            </div>
                        </div>
                    </Card>
                    <p className="text-center text-xs">This project build for education purpose. For better display please use phone resolution. <br/>
                        <span className="text-red-500">Built with ♡ by <a href="https://github.com/Ali-Hakeem">Ali-Hakeem</a></span>
                    </p>
                </div>
            </CardContent>
        </Card>
    </div>
  )
}
