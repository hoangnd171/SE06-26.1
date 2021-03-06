import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../assets/css/messenger.css'
import person1 from '../../assets/img/mes/person1.png'
import person2 from '../../assets/img/mes/person2.png'
import person3 from '../../assets/img/mes/person3.png'

export default function Messenger() {
    return (
        <div>
            <div id='main-mess'>
                <div className="directShop container-fluid row">
                    <div className="section__left col-3">
                        <div className="direct">
                            <div className="direct__nav d-flex">
                                <div className="direct__nav--search ">

                                    <div className="search-box">
                                        <input type="text" placeholder="Search"></input>
                                        <label htmlFor="check" className="icon">
                                            <i className="fas fa-search" ></i>
                                        </label>
                                    </div>
                                </div>
                                <i className="fal fa-ellipsis-h " id='icon'></i>
                            </div>


                            <div className="direct__main">
                                <div className="direct__main--component a d-flex">
                                    <img src={person2} alt="" />
                                    <p className="component__paragraph col-6">DATA'S FASHION</p>
                                    <p className="component__time col-3">11:04</p>
                                </div>
                                <div className="direct__main--component d-flex">
                                    <img src={person1} alt="" />
                                    <p className="component__paragraph col-6">Lily Ash</p>
                                    <p className="component__time col-3">Thu</p>
                                </div>
                                <div className="direct__main--component d-flex">
                                    <img src={person3} alt="" />
                                    <p className="component__paragraph col-6">Tyler Bird</p>
                                    <p className="component__time col-3">We</p>
                                </div>

                            </div>
                            <div className="direct__bot">
                                <div className="direct__bot-left">
                                    <i className="fas fa-bell" id='chuong'></i>
                                    <p>Notifications</p>
                                </div>
                                <div className="direct__bot-right">
                                    <i className="fal fa-user-friends"></i>
                                    <p>Contacts</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="section__right col-9">
                        <div className="shop">
                            <div className="shop__online d-flex">
                                <div className="shop__online--circle"></div>
                                <p className="shop__online--name">DATA'S FASHION</p>
                                <span className="far fa-cog "></span>

                            </div>
                            <div className="shop__mess">
                                <div className="userLeft d-flex  col-12 col-md-7">
                                    <img className="userLeft-img" src={person2} alt="" />
                                    <div className="userLeft-wrap">
                                        <p className="wrap__time">10:16</p>
                                        <p className="wrap__paragraph">Ch??o b???n Nguy???n Th??? Hu??? DATA???s FASHION c???m ??n b???n ???? quan t??m v?? ???ng
                                            h??? shop</p>

                                    </div>
                                </div>
                                <div className="userRight  ">
                                    <p className="userRight__time">10:45</p>
                                    <p className="userRight__paragraph"> D??? shop cho m??nh h???i v??? s???n ph???m b??n shop.</p>
                                </div>
                                <div className="userLeft d-flex col-12 col-md-7">
                                    <img className="userLeft-img" src={person2} alt="" />
                                    <div className="userLeft-wrap">
                                        <p className="wrap__time">11:04</p>
                                        <p className="wrap__paragraph">D??? s???n ph???m b??n m??nh c?? ????? c??c size S M L c??n n???ng ph?? h???p c??c size
                                            shop m??nh ????? b??n d?????i r???i ???.</p>

                                    </div>
                                </div>
                                <div className="userRight ">
                                    <p className="userRight__time">12:47</p>
                                    <p className="userRight__paragraph"> d??? v??ng m??nh c???m ??n shop. </p>
                                </div>
                                <div className="userLeft d-flex col-12 col-md-7">
                                    <img className="userLeft-img" src={person2} alt="" />
                                    <div className="userLeft-wrap">
                                        <p className="wrap__time">12:48</p>
                                        <p className="wrap__paragraph">D??? v??ng shop c???m ??n b???n nha!</p>

                                    </div>
                                </div>


                            </div>
                            <div className="shop__chat">
                                <div className="shop__chat--mess">
                                    <input type="text " className="mess__input">

                                    </input>
                                    <div className="mess__icon--left">
                                            <i className="far fa-smile"></i>
                                            <i className="fas fa-camera"></i>
                                            <i className="far fa-paperclip"></i>
                                            <i className="fal fa-microphone"></i>
                                            <i className="far fa-ellipsis-h"></i>

                                            <div className="mess__icon--right">
                                                <i className="far fa-paper-plane"></i>
                                            </div>
                                        </div>


                                </div>
                            </div>

                        </div>
                    </div>


                </div>


            </div>
        </div>
    )
}
