import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../assets/css/signin.css'


export default function SignInScreen() {
    return (
        <div>
            <div id="main">
                <div className="container">
                    
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb  mb-5 mt-4">
                            <li className="breadcrumb-item"><a href="#">Home</a><i className="fas fa-chevron-right"></i></li>
                            <li className="breadcrumb-item active" aria-current="page">Sign In</li>
                        </ol>
                    </nav>
                    <div className="row mb-3">
                        <h1>Customer Sign In</h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                            <div className="container mb-5">
                            <form>
                                <h5 className="form-header">Registered Customer</h5>
                                <p className="form-note">If you have an account, sign in with your email address.</p>
                                <div className="form-group mb-4 mt-4">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group mb-4 mt-4">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                                </div>
                                <div className="form-group form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                                    <label className="form-check-label" htmlFor="exampleCheck1">Remember Password</label>
                                </div>
                                <div className="form-button mt-4 row">
                                    <button className="form__btn col-md-4 col-sm-12">Sign in</button>
                                    <div className="form__forgot-password col-md-8 col-sm-12 mb-3">
                                        <NavLink to='/' href="#">Forgot your password ?</NavLink>
                                    </div>
                                </div>
                            </form>
                                        
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <div className="container">
                                <form>
                                    <div className="container">
                                        <h5 className="form-header">New Customer ?</h5>
                                        <p className="text">Creating an account has many benefits:
                                        </p>
                                        <ul className="list">
                                            <li className="list__item">Check out faster</li>
                                            <li className="list__item">Keep more than one address</li>
                                            <li className="list__item">Track orders and more</li>
                                        </ul>

                                        <button className="btn-signup col-md-7">Create account</button>
                                    </div>
                                    
                                </form>
                            </div>
                        </div>

                    </div>
                    <div className="row mt-5 mb-5">
                        <div className="col-lg-4">
                            <div className="container">
                                <div className="item__header">
                                    <div className="icon-wrapper--circle">
                                        <i className="fas fa-headset"></i>
                                    </div>
                                </div>
                                <div className="item__content">
                                    <div className="content__header">
                                        <h3>Product support</h3>
                                    </div>
                                    <div className="content__body">
                                        <p>Up to 3 years on-site warranty available for your peace of mind.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="container">
                                <div className="item__header">
                                    <div className="icon-wrapper--circle">
                                        <i className="fas fa-user"></i>
                                    </div>
                                </div>
                                <div className="item__content">
                                    <div className="content__header">
                                        <h3>Personal Account</h3>
                                    </div>
                                    <div className="content__body">
                                        <p>With big discounts, free delivery and a dedicated support specialist.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="container">
                                <div className="item__header">
                                    <div className="icon-wrapper--circle">
                                        <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M25.2047 1.22977C25.1293 1.04194 24.9844 0.89041 24.8001 0.806715C24.6158 0.723019 24.4063 0.713599 24.2152 0.780413C24.0242 0.847227 23.8662 0.985132 23.7742 1.16544C23.6823 1.34574 23.6633 1.55457 23.7214 1.74847C24.9291 5.21947 22.5319 7.81167 20.7041 9.20007L19.9657 8.14187C19.7174 7.78697 19.1623 7.49187 18.7307 7.48667L14.5863 7.50487C14.08 7.52016 13.5873 7.67198 13.1602 7.94427L0.948006 16.5074C0.663949 16.7073 0.470671 17.0116 0.410489 17.3537C0.350307 17.6957 0.428126 18.0477 0.626906 18.3326L6.17661 26.273C6.59261 26.8645 7.25691 26.793 7.84971 26.3796L20.0619 17.8152C20.4129 17.5669 20.8185 17.0313 20.9615 16.6218L22.2589 12.5333C22.4019 12.1251 22.3148 11.5024 22.0665 11.1475L21.6167 10.5027C24.0711 8.62157 26.6191 5.29747 25.2047 1.22977V1.22977ZM19.5224 13.3952C19.2974 13.5527 19.0436 13.6643 18.7755 13.7236C18.5074 13.783 18.2302 13.7889 17.9597 13.7411C17.6893 13.6933 17.431 13.5927 17.1994 13.445C16.9679 13.2973 16.7678 13.1054 16.6104 12.8804C16.2918 12.4249 16.1669 11.8617 16.2632 11.3143C16.3595 10.7668 16.669 10.28 17.1239 9.96057C17.4805 9.71073 17.9063 9.57856 18.3416 9.58252C18.777 9.58648 19.2003 9.72638 19.5523 9.98267C19.1987 10.1959 18.9556 10.3207 18.9101 10.3402C18.749 10.417 18.6187 10.5463 18.5406 10.7069C18.4626 10.8674 18.4414 11.0497 18.4805 11.2239C18.5196 11.3981 18.6168 11.5539 18.756 11.6656C18.8952 11.7774 19.0683 11.8385 19.2468 11.8391C19.3586 11.8391 19.473 11.8131 19.5809 11.7624C19.8331 11.6428 20.1035 11.5011 20.3856 11.3334C20.4505 11.7235 20.4039 12.1239 20.2512 12.4887C20.0985 12.8535 19.8459 13.1677 19.5224 13.3952V13.3952Z" fill="white"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="item__content">
                                    <div className="content__header">
                                        <h3>Amazing savings</h3>
                                    </div>
                                    <div className="content__body">
                                        <p>Up to 70% off new Products, you can be sure of the best price.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Body --> */}

            {/* <!-- Footer --> */}
            <div className="footer pt-5">
                <div className="container">
                    <div className="row subscription display-flex justify-content-center align-items-center ">
                        <div className="col-md-7 col-sm-12">
                            <h3>Subscribe To Our Lastest Deal, Products,...</h3>
                        </div>
                        <div className="col-md-5 col-sm-12">
                            <div className="row display-flex justify-content-center align-items-center">
                                <div className="col-md-9 col-sm-8">
                                    <input type="email" className="email-input" placeholder="Your email"></input>
                                </div>
                                <div className="col-md-3 col-sm-4">
                                    <button type="submit">Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row category">
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-3 col-sm-6">
                                    <p className="category__header">New Arrivals</p>
                                    <ul className="category__list">
                                        <li className="list-item">
                                            <a href="#">Laptops</a>
                                        </li>
                                        <li className="list-item">
                                            <a href="#">PCs</a>
                                        </li>
                                        <li className="list-item">
                                            <a href="#">Funiture</a>
                                        </li>
                                        <li className="list-item">
                                            <a href="#">Beauty</a>
                                        </li>
                                        <li className="list-item">
                                            <a href="#">Clothes</a>
                                        </li>
                                        <li className="list-item">
                                            <a href="#">Baby</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <p className="category__header">New Arrivals</p>
                                    <ul className="category__list">
                                        <li className="list-item">
                                            <a href="#">Laptops</a>
                                        </li>
                                        <li className="list-item">
                                            <a href="#">PCs</a>
                                        </li>
                                        <li className="list-item">
                                            <a href="#">Funiture</a>
                                        </li>
                                        <li className="list-item">
                                            <a href="#">Beauty</a>
                                        </li>
                                        <li className="list-item">
                                            <a href="#">Clothes</a>
                                        </li>
                                        <li className="list-item">
                                            <a href="#">Baby</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <p className="category__header">New Arrivals</p>
                                    <ul className="category__list">
                                        <li className="list-item">
                                            <a href="#">Laptops</a>
                                        </li>
                                        <li className="list-item">
                                            <a href="#">PCs</a>
                                        </li>
                                        <li className="list-item">
                                            <a href="#">Funiture</a>
                                        </li>
                                        <li className="list-item">
                                            <a href="#">Beauty</a>
                                        </li>
                                        <li className="list-item">
                                            <a href="#">Clothes</a>
                                        </li>
                                        <li className="list-item">
                                            <a href="#">Baby</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <p className="category__header">New Arrivals</p>
                                    <ul className="category__list">
                                        <li className="list-item">
                                            <a href="#">Laptops</a>
                                        </li>
                                        <li className="list-item">
                                            <a href="#">PCs</a>
                                        </li>
                                        <li className="list-item">
                                            <a href="#">Funiture</a>
                                        </li>
                                        <li className="list-item">
                                            <a href="#">Beauty</a>
                                        </li>
                                        <li className="list-item">
                                            <a href="#">Clothes</a>
                                        </li>
                                        <li className="list-item">
                                            <a href="#">Baby</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <p className="category__header">Address</p>
                            <ul className="category__list">
                                <li className="list-item">
                                    Address : <span>1234 Street Adress City Address, 1234</span>
                                </li>
                                <li className="list-item">
                                    Phones : <span>(00) 1234 5678</span>
                                </li>
                                <li className="list-item">
                                    E-mail : <span>se06@email.com</span>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="row socials">
                        <div className="container">
                            <div className="socials-group text-white">
                                <i className="fab fa-facebook-square"></i>
                                <i className="fab fa-instagram"></i>
                            </div>
                            <div className="payment align-items-center">
                                <div className="brand">
                                    <svg width="27" height="18" viewBox="0 0 27 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.1436 15.4543H9.85677V2.50755H17.1436V15.4543Z" fill="#6C6BBD"/>
                                    <path d="M10.3235 8.97851C10.3235 6.35219 11.5673 4.01274 13.5042 2.5051C12.0878 1.40265 10.3002 0.744625 8.35749 0.744625C3.75825 0.744625 0.0300293 4.431 0.0300293 8.97851C0.0300293 13.526 3.75825 17.2124 8.35749 17.2124C10.3002 17.2124 12.0878 16.5544 13.5042 15.4519C11.5673 13.9443 10.3235 11.6048 10.3235 8.97851Z" fill="#EB001B"/>
                                    <path d="M26.9708 8.97851C26.9708 13.526 23.2426 17.2124 18.6434 17.2124C16.7006 17.2124 14.913 16.5544 13.4961 15.4519C15.4335 13.9443 16.6773 11.6048 16.6773 8.97851C16.6773 6.35219 15.4335 4.01274 13.4961 2.5051C14.913 1.40265 16.7006 0.744625 18.6434 0.744625C23.2426 0.744625 26.9708 4.431 26.9708 8.97851Z" fill="#0099DF"/>
                                    </svg>
                                </div>
                                <div className="brand">
                                    <svg width="30" height="6" viewBox="0 0 30 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.4436 2.964C18.4462 2.3741 18.2174 1.78335 17.7569 1.33817C17.2955 0.892069 16.6828 0.671072 16.0713 0.674622C16.0684 0.674622 16.0655 0.674438 16.0625 0.674438C14.7346 0.674438 13.6813 1.69238 13.6813 2.97637C13.6813 4.24769 14.7476 5.27812 16.0625 5.27812C17.3908 5.27812 18.4439 4.26 18.4439 2.97637C18.4439 2.97215 18.4436 2.96817 18.4436 2.964Z" fill="#F26E21"/>
                                    <path d="M13.239 3.95072C12.8831 4.29513 12.5546 4.42969 12.2008 4.43697C11.3388 4.42951 10.705 3.81242 10.705 2.93266C10.705 2.4898 10.8785 2.12684 11.1533 1.81677C11.411 1.58028 11.7429 1.42748 12.1247 1.42748C12.5368 1.42748 12.8575 1.56026 13.2236 1.91441V0.896287C12.8575 0.719305 12.5367 0.630722 12.1247 0.630722C11.5426 0.670943 10.9937 0.898308 10.5727 1.25533C10.4513 1.36087 10.3351 1.47737 10.2365 1.61071C9.92894 1.99601 9.74307 2.46782 9.74307 2.9771C9.74307 4.26067 10.7967 5.23453 12.1246 5.23453C12.1311 5.23453 12.1375 5.23398 12.1438 5.23391C12.1527 5.23404 12.1615 5.23453 12.1704 5.23453C12.5367 5.23453 12.8575 5.14619 13.2696 4.96908L13.239 3.95072C13.2235 3.96565 13.2543 3.97955 13.239 3.99369V3.95072Z" fill="#2B2B2B"/>
                                    <path d="M21.4499 1.26513L20.4129 3.72991L19.2221 0.808014H18.2606L20.1381 5.2791H20.6418L22.611 0.808014H21.6494L21.4499 1.26513Z" fill="#2B2B2B"/>
                                    <path d="M22.978 2.75586V5.1465H25.451H25.4966V4.43796H24.7182H23.8939V3.64132V3.24304H25.451V2.49023H23.8939V1.56069H25.4966V0.808014H22.978V2.75586Z" fill="#2B2B2B"/>
                                    <path d="M2.27879 0.808899H0.996307V5.14738H2.27873C2.96553 5.14738 3.46919 4.97016 3.88134 4.66027C4.385 4.26186 4.7057 3.64227 4.7057 2.97836C4.70576 1.69424 3.74391 0.808899 2.27879 0.808899ZM3.33196 4.08494C3.05717 4.30618 2.69081 4.43884 2.14124 4.43884H1.86645V1.56152H2.09539C2.64496 1.56152 3.01132 1.65004 3.28617 1.91554C3.60668 2.18099 3.78995 2.57964 3.78995 2.97817C3.83574 3.37658 3.65259 3.81907 3.33196 4.08494Z" fill="#2B2B2B"/>
                                    <path d="M5.98817 0.807816H5.11809V5.14618H5.98817V0.807816Z" fill="#2B2B2B"/>
                                    <path d="M8.18636 2.49075C7.63691 2.3137 7.49936 2.1808 7.49936 1.95955C7.49936 1.69393 7.77415 1.47262 8.14051 1.47262C8.41529 1.47262 8.64423 1.56121 8.87323 1.82683L9.33129 1.25138C8.9648 0.941371 8.50706 0.764511 8.00327 0.764511C7.22458 0.764511 6.58343 1.29576 6.58343 2.00382C6.58343 2.62371 6.85847 2.88928 7.68264 3.19916C8.049 3.33176 8.18642 3.37621 8.27819 3.46473C8.46102 3.55313 8.55278 3.73036 8.55278 3.90722C8.55278 4.26143 8.27819 4.52711 7.86579 4.52711C7.45326 4.52711 7.08722 4.30581 6.904 3.9516L6.35443 4.48285C6.76677 5.0583 7.27049 5.32387 7.91164 5.32387C8.82744 5.32387 9.46827 4.74842 9.46827 3.90722C9.4684 3.15484 9.19387 2.84495 8.18636 2.49075Z" fill="#2B2B2B"/>
                                    <path d="M27.97 3.33125C28.6567 3.19865 29.0231 2.7558 29.0231 2.09195C29.0231 1.29525 28.4277 0.808014 27.4204 0.808014H26.0923V5.1465H26.9624V3.41983H27.0999L28.336 5.1465H29.3894L27.97 3.33125ZM27.237 2.8H26.9624V1.47211H27.237C27.7866 1.47211 28.1073 1.69335 28.1073 2.13633C28.1073 2.57882 27.7866 2.8 27.237 2.8Z" fill="#2B2B2B"/>
                                    </svg>
                                </div>
                                <div className="brand">
                                    <svg width="29" height="8" viewBox="0 0 29 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.10295 0.902761C4.74708 0.666264 4.28268 0.547729 3.70978 0.547729H1.49181C1.31618 0.547729 1.21915 0.632637 1.20072 0.802289L0.299734 6.26948C0.29037 6.32318 0.304267 6.37229 0.3413 6.41693C0.378121 6.46166 0.424433 6.4839 0.479897 6.4839H1.53342C1.7182 6.4839 1.81976 6.3992 1.83841 6.22934L2.08789 4.75539C2.097 4.68396 2.1295 4.62588 2.18496 4.58115C2.24038 4.53651 2.3097 4.50731 2.39288 4.49395C2.47605 4.48068 2.55448 4.47397 2.62855 4.47397C2.7024 4.47397 2.79015 4.47851 2.89197 4.4874C2.99354 4.49629 3.05828 4.50067 3.08603 4.50067C3.88075 4.50067 4.50454 4.2842 4.95745 3.85078C5.41014 3.41759 5.63675 2.81689 5.63675 2.04842C5.63675 1.52136 5.45866 1.1395 5.10295 0.902638V0.902761ZM3.95939 2.54439C3.91304 2.85711 3.79304 3.06248 3.59898 3.16078C3.40488 3.25921 3.12764 3.30819 2.76727 3.30819L2.30979 3.32155L2.5455 1.8877C2.56389 1.78952 2.62393 1.74037 2.72566 1.74037H2.98913C3.35861 1.74037 3.62678 1.79186 3.79313 1.89442C3.95939 1.99722 4.01486 2.21394 3.95939 2.54439Z" fill="#003087"/>
                                        <path d="M28.5091 0.547729H27.4834C27.3814 0.547729 27.3214 0.596881 27.3031 0.695223L26.4021 6.26973L26.3882 6.29651C26.3882 6.3414 26.4066 6.38363 26.4437 6.42385C26.4805 6.46399 26.5269 6.4841 26.5823 6.4841H27.4973C27.6726 6.4841 27.7697 6.3994 27.7885 6.22954L28.6894 0.748838V0.735526C28.6894 0.610397 28.6291 0.547894 28.5091 0.547894V0.547729Z" fill="#009CDE"/>
                                        <path d="M16.1162 2.70654C16.1162 2.66198 16.0976 2.61946 16.0609 2.57937C16.0238 2.53919 15.9822 2.51895 15.9361 2.51895H14.8687C14.7668 2.51895 14.6837 2.56384 14.6191 2.65293L13.1497 4.74343L12.5398 2.73341C12.4934 2.59059 12.3918 2.51895 12.2348 2.51895H11.195C11.1487 2.51895 11.1071 2.5391 11.0704 2.57937C11.0333 2.61946 11.0149 2.66206 11.0149 2.70654C11.0149 2.72452 11.105 2.98797 11.2852 3.49717C11.4654 4.00654 11.6594 4.55596 11.8674 5.1456C12.0754 5.73512 12.1839 6.04797 12.1932 6.0834C11.4353 7.0841 11.0565 7.62009 11.0565 7.69144C11.0565 7.80768 11.1165 7.86568 11.2367 7.86568H12.3041C12.4057 7.86568 12.4889 7.82112 12.5537 7.73174L16.0886 2.8003C16.107 2.7826 16.1162 2.75147 16.1162 2.7065V2.70654Z" fill="#003087"/>
                                        <path d="M26.0563 2.51691H25.0028C24.8732 2.51691 24.795 2.66436 24.7672 2.95922C24.5267 2.60198 24.088 2.42311 23.4502 2.42311C22.7848 2.42311 22.2187 2.66436 21.7521 3.14678C21.2854 3.62919 21.0521 4.19664 21.0521 4.84871C21.0521 5.37589 21.2115 5.79572 21.5303 6.10828C21.8491 6.42117 22.2765 6.5773 22.8127 6.5773C23.0806 6.5773 23.3532 6.5236 23.6305 6.4165C23.9077 6.30931 24.1247 6.16644 24.2821 5.9877C24.2821 5.99667 24.2726 6.03672 24.2544 6.10816C24.2357 6.17975 24.2266 6.23353 24.2266 6.26896C24.2266 6.41207 24.2865 6.48334 24.4068 6.48334H25.3634C25.5388 6.48334 25.6405 6.39864 25.6682 6.22878L26.2366 2.73129C26.2457 2.67763 26.2319 2.6286 26.195 2.58387C26.1578 2.53931 26.1117 2.51691 26.0563 2.51691ZM24.2473 5.15688C24.0117 5.38023 23.7275 5.49184 23.3948 5.49184C23.1267 5.49184 22.9097 5.42049 22.7433 5.27747C22.5768 5.13485 22.4937 4.93828 22.4937 4.68786C22.4937 4.35757 22.6092 4.07814 22.8403 3.85037C23.071 3.62256 23.3578 3.50869 23.6997 3.50869C23.9583 3.50869 24.1732 3.58237 24.3443 3.7297C24.5151 3.87716 24.6009 4.0804 24.6009 4.33954C24.6008 4.66111 24.483 4.93366 24.2473 5.15688Z" fill="#009CDE"/>
                                        <path d="M10.3085 2.51691H9.25494C9.12537 2.51691 9.04698 2.66436 9.01923 2.95922C8.7697 2.60198 8.3307 2.42311 7.70229 2.42311C7.0369 2.42311 6.47078 2.66436 6.00414 3.14678C5.53738 3.62919 5.30413 4.19664 5.30413 4.84871C5.30413 5.37589 5.46357 5.79572 5.78242 6.10828C6.10126 6.42117 6.52857 6.5773 7.06465 6.5773C7.32328 6.5773 7.59145 6.5236 7.86864 6.4165C8.14587 6.30931 8.36769 6.16644 8.53404 5.9877C8.49696 6.0948 8.47857 6.18864 8.47857 6.26896C8.47857 6.41207 8.53861 6.48334 8.65878 6.48334H9.61526C9.79072 6.48334 9.89249 6.39864 9.92025 6.22878L10.4886 2.73129C10.4977 2.67763 10.4839 2.6286 10.447 2.58387C10.41 2.53931 10.3639 2.51691 10.3085 2.51691ZM8.49946 5.16352C8.26375 5.38265 7.97482 5.49184 7.6331 5.49184C7.36493 5.49184 7.15007 5.42049 6.98847 5.27747C6.82665 5.13485 6.74585 4.93828 6.74585 4.68786C6.74585 4.35757 6.86131 4.07814 7.09244 3.85037C7.32332 3.62256 7.60984 3.50865 7.9519 3.50865C8.21053 3.50865 8.4254 3.58237 8.59653 3.7297C8.76737 3.87716 8.85296 4.0804 8.85296 4.33954C8.85292 4.67008 8.73513 4.94488 8.49946 5.16352Z" fill="#003087"/>
                                        <path d="M20.8505 0.902761C20.4947 0.666264 20.0304 0.547729 19.4574 0.547729H17.2533C17.0684 0.547729 16.9667 0.632637 16.9483 0.802289L16.0472 6.26948C16.0379 6.32318 16.0518 6.37229 16.0889 6.41693C16.1255 6.46166 16.1719 6.4839 16.2274 6.4839H17.3641C17.4749 6.4839 17.5488 6.4259 17.5859 6.30974L17.8354 4.75539C17.8446 4.68396 17.877 4.62588 17.9325 4.58115C17.988 4.53651 18.0572 4.50731 18.1405 4.49395C18.2236 4.48068 18.302 4.47397 18.3761 4.47397C18.45 4.47397 18.5377 4.47851 18.6394 4.4874C18.741 4.49629 18.806 4.50067 18.8335 4.50067C19.6284 4.50067 20.252 4.2842 20.7049 3.85078C21.1578 3.41759 21.3842 2.81689 21.3842 2.04842C21.3842 1.52136 21.2062 1.13946 20.8505 0.902638V0.902761ZM19.4297 3.10713C19.2264 3.2411 18.9213 3.30807 18.5148 3.30807L18.0712 3.32151L18.3068 1.88762C18.3251 1.78948 18.3852 1.74025 18.487 1.74025H18.7364C18.9398 1.74025 19.1015 1.74922 19.2218 1.76703C19.3417 1.78497 19.4574 1.84072 19.5683 1.93447C19.6793 2.02831 19.7346 2.16462 19.7346 2.3432C19.7346 2.71855 19.6329 2.97303 19.4297 3.10713Z" fill="#009CDE"/>
                                    </svg>
                                </div>
                                <div className="brand">
                                    <svg width="34" height="12" viewBox="0 0 34 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24.8132 1.77289L24.1686 3.17772H25.4613L24.8132 1.77289ZM17.375 2.64344C17.4965 2.58643 17.5681 2.46242 17.5681 2.30842C17.5681 2.15751 17.4929 2.04821 17.3714 1.99685C17.2608 1.93992 17.0905 1.93334 16.9273 1.93334H15.7741V2.71609H16.9118C17.094 2.71613 17.2463 2.71372 17.375 2.64344ZM2.59819 1.77289L1.9609 3.17772H3.23933L2.59819 1.77289ZM32.2697 10.7727H30.4612V10.0168H32.2624C32.441 10.0168 32.5661 9.99578 32.6414 9.9295C32.7126 9.87044 32.7528 9.78697 32.7521 9.69969C32.7521 9.59697 32.7067 9.51542 32.6376 9.46662C32.5698 9.41282 32.4707 9.38832 32.3076 9.38832C31.4283 9.36146 30.3312 9.41274 30.3312 8.29734C30.3312 7.78615 30.6922 7.24801 31.675 7.24801H33.5405V6.5467H31.8073C31.2842 6.5467 30.9042 6.65936 30.6351 6.83461V6.5467H28.0715C27.6616 6.5467 27.1804 6.63807 26.9529 6.83461V6.5467H22.3746V6.83461C22.0104 6.59818 21.3955 6.5467 21.1119 6.5467H18.0921V6.83461C17.8039 6.58354 17.1628 6.5467 16.7722 6.5467H13.3926L12.6194 7.29945L11.895 6.5467H6.84656V11.4654H11.7998L12.5966 10.7005L13.3472 11.4654L16.4004 11.4678V10.3107H16.7007C17.1057 10.3166 17.5835 10.3018 18.0051 10.1379V11.4652H20.5235V10.1832H20.645C20.7999 10.1832 20.8153 10.189 20.8153 10.3284V11.4649H28.4657C28.9515 11.4649 29.4592 11.3532 29.7403 11.1501V11.4649H32.167C32.6719 11.4649 33.1651 11.4013 33.5404 11.2383V10.322C33.313 10.6212 32.8695 10.7729 32.2696 10.7729L32.2697 10.7727ZM16.7408 9.61128H15.5722V10.7936H13.7519L12.5987 9.62675L11.4003 10.7936H7.69066V7.26878H11.4574L12.6096 8.42419L13.8008 7.26878H16.7933C17.5365 7.26878 18.3716 7.45389 18.3716 8.43001C18.3716 9.40917 17.5594 9.61128 16.7408 9.61128ZM22.3599 9.45147C22.4921 9.62351 22.5112 9.78412 22.5151 10.0948V10.7936H21.5747V10.3526C21.5747 10.1406 21.5975 9.82658 21.4234 9.66268C21.2867 9.53646 21.078 9.50631 20.7362 9.50631H19.7354V10.7936H18.7944V7.26882H20.9565C21.4308 7.26882 21.776 7.28778 22.0834 7.43513C22.379 7.59574 22.565 7.81577 22.565 8.21787C22.5649 8.78042 22.1477 9.06741 21.9012 9.15562C22.1095 9.22478 22.2799 9.34879 22.3599 9.45147ZM26.2284 7.99776H24.0354V8.63853H26.1748V9.35773H24.0354V10.059L26.2284 10.0622V10.7936H23.1027V7.26878H26.2284V7.99776ZM28.635 10.7935H26.811V10.0377H28.6277C28.8054 10.0377 28.9313 10.0165 29.0103 9.95035C29.0746 9.89586 29.1209 9.8166 29.1209 9.72061C29.1209 9.61781 29.0708 9.53626 29.0066 9.48735C28.935 9.43363 28.8361 9.40929 28.6731 9.40929C27.7973 9.38227 26.7004 9.43355 26.7004 8.31823C26.7004 7.80695 27.0576 7.26882 28.0394 7.26882H29.917V8.01893H28.199C28.0287 8.01893 27.918 8.02478 27.8238 8.08276C27.7211 8.13985 27.6831 8.22449 27.6831 8.33623C27.6831 8.46918 27.7702 8.55971 27.888 8.5988C27.9868 8.62971 28.0929 8.63873 28.2524 8.63873L28.7566 8.65112C29.2649 8.66207 29.614 8.74133 29.8261 8.9345C30.0083 9.10418 30.1063 9.31852 30.1063 9.68124C30.1062 10.4395 29.5794 10.7935 28.635 10.7935ZM21.3715 8.05461C21.2583 7.99415 21.0913 7.99094 20.9247 7.99094H19.7714V8.78255H20.9093C21.0914 8.78255 21.2463 8.77673 21.3715 8.7099C21.4929 8.6439 21.5655 8.52234 21.5655 8.37159C21.5655 8.22084 21.4929 8.1117 21.3715 8.05461ZM31.8353 7.99086C31.665 7.99086 31.5517 7.99668 31.4563 8.05453C31.3575 8.1117 31.3196 8.19634 31.3196 8.30816C31.3196 8.44103 31.403 8.53156 31.5243 8.57073C31.6232 8.60165 31.7292 8.61067 31.8852 8.61067L32.3929 8.62282C32.905 8.63424 33.247 8.71351 33.4555 8.90668C33.4935 8.93346 33.5163 8.96361 33.5424 8.99384V7.99094H31.8354L31.8353 7.99086ZM16.7732 7.99086H15.5521V8.8886H16.7623C17.1221 8.8886 17.3459 8.72798 17.3461 8.42307C17.3459 8.11483 17.1113 7.99086 16.7732 7.99086ZM8.62343 7.99086V8.63172H10.6794V9.35091H8.62343V10.0521H10.926L11.9957 9.0181L10.9714 7.99086H8.62343ZM14.6359 10.4558V7.6299L13.1981 9.0201L14.6359 10.4558ZM8.70202 4.79658V5.40391H16.5263L16.5227 4.11908H16.6741C16.7801 4.12241 16.811 4.13119 16.811 4.28863V5.40395H20.8578V5.10482C21.1842 5.26214 21.6918 5.40395 22.3599 5.40395H24.0623L24.4267 4.62125H25.2345L25.5908 5.40395H28.8715V4.66046L29.3682 5.40391H31.9973V0.489258H29.3955V1.06969L29.0312 0.489258H26.3614V1.06969L26.0269 0.489258H22.4206C21.8169 0.489258 21.2864 0.565034 20.8577 0.776247V0.489258H18.369V0.776247C18.0962 0.558539 17.7246 0.489258 17.3114 0.489258H8.21947L7.60947 1.7587L6.98298 0.489258H4.11931V1.06969L3.80466 0.489258H1.36243L0.228314 2.82606V4.69526L1.90533 1.17129H3.29682L4.88953 4.50774V1.17129H6.41812L7.64372 3.56186L8.76968 1.17129H10.3289V4.69526H9.369L9.3655 1.93535L8.00745 4.69526H7.18517L5.82367 1.9329V4.69526H3.91874L3.5589 3.90923H1.60896L1.2454 4.69526H0.228271V5.40419H1.82849L2.18928 4.62145H2.99712L3.35696 5.40419H6.50534V4.80572L6.78634 5.40668H8.42073L8.70177 4.7967L8.70202 4.79658ZM21.0315 1.58204C21.3341 1.30079 21.8083 1.17109 22.4537 1.17109H23.3603V1.92617H22.4727C22.1311 1.92617 21.9379 1.97187 21.7521 2.13497C21.5924 2.28332 21.4829 2.56381 21.4829 2.93315C21.4829 3.31071 21.5664 3.58291 21.7403 3.76072C21.8845 3.90017 22.1466 3.94247 22.3931 3.94247H22.8138L24.1337 1.17121H25.5369L27.1225 4.50434V1.17125H28.5485L30.1947 3.62549V1.17125H31.154V4.6951H29.8269L28.0517 2.05022V4.6951H26.1444L25.78 3.90907H23.8345L23.4809 4.6951H22.3849C21.9298 4.6951 21.3534 4.60457 21.027 4.30531C20.6978 4.00613 20.5267 3.60083 20.5267 2.96006C20.5266 2.43736 20.6288 1.9596 21.0315 1.58204ZM19.1052 1.17113H20.0607V4.6951H19.1052V1.17113ZM14.7969 1.17113H16.9509C17.4294 1.17113 17.7822 1.18255 18.085 1.33992C18.3813 1.49733 18.5589 1.72714 18.5589 2.12014C18.5589 2.68205 18.1419 2.97229 17.8991 3.05949C18.1039 3.12965 18.2791 3.25358 18.3625 3.35622C18.4947 3.53151 18.5175 3.68807 18.5175 4.00277V4.69506H17.5729L17.5694 4.25066C17.5694 4.03857 17.5919 3.73362 17.4215 3.56418C17.2847 3.4403 17.0761 3.41331 16.7389 3.41331H15.7335V4.6951H14.797L14.7969 1.17113ZM11.0215 1.17113H14.1501V1.90496H11.9581V2.54016H14.0974V3.26252H11.9581V3.96628H14.1501V4.69506H11.0215V1.17113Z" fill="#2557D6"/>
                                    </svg>
                                </div>
                                <div className="brand">
                                    <svg width="29" height="10" viewBox="0 0 29 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M26.2 0.882721H24.4547C23.9271 0.882721 23.5212 1.04323 23.2777 1.56486L19.9495 9.06845H22.3036C22.3036 9.06845 22.7094 8.0653 22.7906 7.82454C23.0341 7.82454 25.3476 7.82454 25.6723 7.82454C25.7535 8.10542 25.9564 9.02832 25.9564 9.02832H28.067L26.2 0.882721ZM23.44 6.13924C23.643 5.65773 24.3329 3.85205 24.3329 3.85205C24.3329 3.89218 24.5359 3.37054 24.6171 3.08966L24.7794 3.81193C24.7794 3.81193 25.2259 5.77811 25.307 6.17937H23.44V6.13924Z" fill="#3362AB"/>
                                        <path d="M20.1116 6.38198C20.1116 8.06727 18.5693 9.19081 16.1746 9.19081C15.1599 9.19081 14.1858 8.99017 13.6582 8.74942L13.9829 6.90362L14.267 7.02399C14.9976 7.345 15.4846 7.46538 16.3775 7.46538C17.0269 7.46538 17.7169 7.22463 17.7169 6.66286C17.7169 6.30172 17.4328 6.06097 16.5399 5.65971C15.6876 5.25845 14.5511 4.61643 14.5511 3.45277C14.5511 1.84773 16.134 0.76432 18.3663 0.76432C19.2187 0.76432 19.9492 0.924825 20.3957 1.12546L20.071 2.891L19.9086 2.7305C19.5028 2.57 18.9751 2.40949 18.204 2.40949C17.3516 2.44962 16.9458 2.81075 16.9458 3.13176C16.9458 3.4929 17.4328 3.77378 18.204 4.13491C19.5028 4.73681 20.1116 5.41895 20.1116 6.38198Z" fill="#3362AB"/>
                                        <path d="M0.304962 0.964315L0.345549 0.80381H3.83606C4.32311 0.80381 4.68839 0.964315 4.81016 1.48595L5.58132 5.09731C4.81016 3.17125 3.02431 1.60633 0.304962 0.964315Z" fill="#F9B50B"/>
                                        <path d="M10.4924 0.884357L6.96134 9.02996H4.56669L2.53732 2.20852C3.99847 3.13142 5.21609 4.57596 5.66255 5.57911L5.90607 6.42176L8.09779 0.844231H10.4924V0.884357Z" fill="#3362AB"/>
                                        <path d="M11.426 0.844231H13.6583L12.2377 9.02996H10.0054L11.426 0.844231Z" fill="#3362AB"/>
                                    </svg> 
                                </div>
                            </div>
                            <div className="copyright">
                                <p>Copyright <i className="far fa-copyright"></i> 2021 SE06 Co Ltd.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}