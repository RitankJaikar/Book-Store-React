

export default function Nav() {


    return (
        <div
            data-animation="default"
            data-collapse="medium"
            data-duration="400"
            data-easing="ease"
            data-easing2="ease"
            role="banner"
            class="navbar w-nav"
        >
            <div class="navbar-wrapper">
                <a href="#" class="navbar-brand w-nav-brand">
                    <img
                        src="https://cdn.prod.website-files.com/675698d5f0e31558c1680bdd/677010561c12c66a66bc3678_book-company-logo.svg"
                        loading="lazy"
                        alt=""
                        class="company-logo"
                    />
                </a>
                <div class="search-block w-form">
                    <form
                        id="email-form"
                        name="email-form"
                        data-name="Email Form"
                        method="get"
                        class="search-form"
                        data-wf-page-id="675698d5f0e31558c1680bf0"
                        data-wf-element-id="bc16957a-5784-c1c9-4017-9efa2810007d"
                        data-turnstile-sitekey="0x4AAAAAAAQTptj2So4dx43e"
                    >
                        <div class="input-wrapper">
                            <input
                                class="input-field w-input"
                                maxlength="256"
                                name="searh-query"
                                data-name="searh-query"
                                placeholder="Search for the book you want and read it now... Sherlock Holmes, Harry Pot..."
                                type="text"
                                id="searh-query"
                                required
                            /><img
                                src="https://cdn.prod.website-files.com/675698d5f0e31558c1680bdd/67701056eb7b3d6c2e2461e9_ant-design_search-outlined.svg"
                                loading="lazy"
                                alt=""
                                class="search-icon"
                            />
                        </div>
                        <input
                            type="submit"
                            data-wait="Please wait..."
                            class="search-button w-button"
                            value="Search"
                        />
                    </form>
                </div>
                <div class="div-block-1">
                    <img
                        src="https://cdn.prod.website-files.com/675698d5f0e31558c1680bdd/6770105694cd6bbac040db26_bx_bx-book-heart.svg"
                        loading="lazy"
                        alt=""
                        class="img-1"
                    /><img
                        src="https://cdn.prod.website-files.com/675698d5f0e31558c1680bdd/67701056e42758d966d374ba_ic_round-notifications-none.svg"
                        loading="lazy"
                        alt=""
                        class="img-1"
                    /><img
                        src="https://cdn.prod.website-files.com/675698d5f0e31558c1680bdd/6770105766ec3b839adedeb5_fluent_premium-person-20-regular.svg"
                        loading="lazy"
                        alt=""
                        class="img-1"
                    /><img
                        src="https://cdn.prod.website-files.com/675698d5f0e31558c1680bdd/67701057e42758d966d37504_profile.svg"
                        loading="lazy"
                        alt=""
                        class="img-1"
                    />
                </div>
            </div>
        </div>
    )
}