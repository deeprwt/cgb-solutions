import { FaQuoteLeft } from "react-icons/fa";
import sara from "@/assets/images/assets/businessman_01.png";
import andy from "@/assets/images/assets/businessman_02.png";
import Image from "next/image";

function Reviews() {
    return (
        <section className="container py-5">
            <div className="row">
                <h2 className="text-center mb-4">What people are saying about us</h2>
                <p className="text-center mb-6">
                    Everything you need to accept card payments and grow your business
                    anywhere on the planet.
                </p>
            </div>
            <div className="row justify-space-around">
                <article className="col-md-4">
                    <div className=" light-bg bo-rd p-5">
                        <span className="text-5xl mb-4">
                            <FaQuoteLeft />
                        </span>
                        <p className="lead mb-4">
                            Money is only a tool. It will take you wherever you wish, but it
                            will not replace you as the driver.
                        </p>
                        <div className="d-flex align-items-center">
                            <Image src={sara} className="rounded-circle" alt="sara" width={64} height={64} />
                            <div className="ms-3">
                                <h5 className="mb-1">Sara Kaan</h5>
                                <p className="small text-muted">Founder & Leader</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="col-md-4">
                    <div className=" light-bg bo-rd p-5">
                        <span className="text-5xl mb-4">
                            <FaQuoteLeft />
                        </span>
                        <p className="lead mb-4">
                            Money is only a tool. It will take you wherever you wish, but it
                            will not replace you as the driver.
                        </p>
                        <div className="d-flex align-items-center">
                            <Image src={andy} className="rounded-circle" alt="sara" width={64} height={64} />
                            <div className="ms-3">
                                <h5 className="mb-1">andrew teat</h5>
                                <p className="small text-muted">Founder & Leader</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="col-md-4">
                    <div className=" light-bg bo-rd p-5">
                        <span className="text-5xl mb-4">
                            <FaQuoteLeft />
                        </span>
                        <p className="lead mb-4">
                            Money is only a tool. It will take you wherever you wish, but it
                            will not replace you as the driver.
                        </p>
                        <div className="d-flex align-items-center">
                            <Image src={sara} className="rounded-circle" alt="sara" width={64} height={64} />
                            <div className="ms-3">
                                <h5 className="mb-1">Sara Kaan</h5>
                                <p className="small text-muted">Founder & Leader</p>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Reviews;