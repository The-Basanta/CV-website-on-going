document.addEventListener("DOMContentLoaded", () => {

    /* =========================================================
       SELECT ELEMENTS
    ========================================================= */

    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(
        "#home, #about, #skills, #education, #contact"
    );

    const menuToggle =
        document.querySelector(".menu-toggle");

    const navLinksContainer =
        document.querySelector(".nav-links");


    /* =========================================================
       1. NAVIGATION
       Click navigation and scroll correctly
    ========================================================= */

    navLinks.forEach((link) => {

        link.addEventListener("click", (event) => {

            event.preventDefault();

            const targetID =
                link.getAttribute("href");

            const target =
                document.querySelector(targetID);

            if (!target) return;

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            setActiveLink(targetID);

            // Close mobile menu
            navLinksContainer.classList.remove("open");

        });

    });


    /* =========================================================
       ACTIVE NAVIGATION
    ========================================================= */

    function setActiveLink(id) {

        navLinks.forEach((link) => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") === id
            ) {
                link.classList.add("active");
            }

        });

    }


    /* =========================================================
       2. SCROLL SPY
       Automatically highlight current section
    ========================================================= */

    const sectionObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        const id =
                            "#" + entry.target.id;

                        setActiveLink(id);

                    }

                });

            },
            {
                root: null,

                threshold: 0.35,

                rootMargin:
                    "-80px 0px -40% 0px"
            }
        );


    sections.forEach((section) => {

        sectionObserver.observe(section);

    });


    /* =========================================================
       3. MOBILE MENU
    ========================================================= */

    menuToggle.addEventListener(
        "click",
        () => {

            navLinksContainer.classList.toggle(
                "open"
            );

        }
    );


    /* =========================================================
       4. TYPING HERO EFFECT
    ========================================================= */

    const roles = [
        "Frontend Engineer",
        "BIT Student",
        "UI/UX Enthusiast",
        "Web Developer"
    ];

    const roleElement =
        document.querySelector(".typing-role");

    let roleIndex = 0;

    let characterIndex = 0;

    let deleting = false;


    function typeRole() {

        const currentRole =
            roles[roleIndex];


        if (!deleting) {

            characterIndex++;

            roleElement.textContent =
                currentRole.substring(
                    0,
                    characterIndex
                );

        } else {

            characterIndex--;

            roleElement.textContent =
                currentRole.substring(
                    0,
                    characterIndex
                );

        }


        let speed = deleting
            ? 45
            : 90;


        if (
            !deleting &&
            characterIndex === currentRole.length
        ) {

            speed = 1800;

            deleting = true;

        }


        if (
            deleting &&
            characterIndex === 0
        ) {

            deleting = false;

            roleIndex =
                (roleIndex + 1) %
                roles.length;

            speed = 500;

        }


        setTimeout(typeRole, speed);

    }


    if (roleElement) {
        typeRole();
    }


    /* =========================================================
       5. INTERACTIVE TERMINAL
    ========================================================= */

    const terminal =
        document.querySelector(".terminal-window");


    if (terminal) {

        terminal.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    terminal.getBoundingClientRect();

                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;


                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;


                const rotateX =
                    ((y - centerY) /
                        centerY) * -4;

                const rotateY =
                    ((x - centerX) /
                        centerX) * 4;


                terminal.style.transform =
                    `perspective(1000px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-5px)`;

            }
        );


        terminal.addEventListener(
            "mouseleave",
            () => {

                terminal.style.transform =
                    "perspective(1000px) rotateX(0deg) rotateY(0deg)";

            }
        );

    }


    /* =========================================================
       6. TERMINAL TYPING
    ========================================================= */

    const terminalTyping =
        document.querySelector("#terminalTyping");


    const commands = [
        "npm run create-future",
        "git status",
        "code portfolio.js",
        "build something amazing",
        "keep learning"
    ];


    let commandIndex = 0;

    let commandCharacter = 0;


    function typeTerminalCommand() {

        const command =
            commands[commandIndex];


        terminalTyping.textContent =
            command.substring(
                0,
                commandCharacter
            );


        commandCharacter++;


        if (
            commandCharacter >
            command.length
        ) {

            setTimeout(() => {

                commandCharacter = 0;

                commandIndex =
                    (commandIndex + 1) %
                    commands.length;

            }, 1800);

        }


        setTimeout(
            typeTerminalCommand,
            commandCharacter > command.length
                ? 1800
                : 70
        );

    }


    if (terminalTyping) {

        typeTerminalCommand();

    }


    /* =========================================================
       7. BUTTON SCROLLING
    ========================================================= */

    const targetButtons =
        document.querySelectorAll(
            "[data-target]"
        );


    targetButtons.forEach((button) => {

        button.addEventListener(
            "click",
            () => {

                const targetID =
                    button.dataset.target;

                const target =
                    document.getElementById(
                        targetID
                    );


                if (!target) return;


                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });


                setActiveLink(
                    "#" + targetID
                );

            }
        );

    });


    /* =========================================================
       8. CONTACT ME BUTTON
       Specifically scroll to Get In Touch
    ========================================================= */

    const contactButton =
        document.querySelector(".contact-me");


    if (contactButton) {

        contactButton.addEventListener(
            "click",
            () => {

                const contact =
                    document.getElementById(
                        "contact"
                    );


                contact.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });


                setActiveLink("#contact");

            }
        );

    }


    /* =========================================================
       9. DOWNLOAD CV
    ========================================================= */

    const downloadCV =
        document.getElementById(
            "downloadCV"
        );


    if (downloadCV) {

        downloadCV.addEventListener(
            "click",
            () => {

                /*
                   Put your actual CV file in the
                   same folder and name it:

                   Bashanta-CV.pdf
                */

                const cv =
                    document.createElement("a");

                cv.href =
                    "Bashanta-CV.pdf";

                cv.download =
                    "Bashanta-CV.pdf";

                cv.click();

            }
        );

    }


    /* =========================================================
       10. EMAIL BUTTON
    ========================================================= */

    const emailButton =
        document.getElementById(
            "emailButton"
        );


    if (emailButton) {

        emailButton.addEventListener(
            "click",
            () => {

                window.location.href =
                    "mailto:bashantadhamala2022@gmail.com";

            }
        );

    }


    /* =========================================================
       11. SCROLL REVEAL
    ========================================================= */

    const revealElements =
        document.querySelectorAll(
            ".reveal"
        );


    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(
                    (entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(
        (element) => {

            revealObserver.observe(
                element
            );

        }
    );


    /* =========================================================
       12. 3D CARD TILT
    ========================================================= */

    const cards =
        document.querySelectorAll(
            ".tilt-card"
        );


    cards.forEach((card) => {

        card.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    card.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;

                const y =
                    event.clientY -
                    rect.top;


                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;


                const rotateX =
                    ((y - centerY) /
                        centerY) * -5;

                const rotateY =
                    ((x - centerX) /
                        centerX) * 5;


                card.style.transform =
                    `perspective(1000px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-5px)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    "perspective(1000px) rotateX(0deg) rotateY(0deg)";

            }
        );

    });


    /* =========================================================
       13. BUTTON RIPPLE
    ========================================================= */

    const buttons =
        document.querySelectorAll(

        );


    buttons.forEach((button) => {

        button.addEventListener(
            "click",
            function (event) {

                const rect =
                    this.getBoundingClientRect();


                const ripple =
                    document.createElement(
                        "span"
                    );


                const size =
                    Math.max(
                        rect.width,
                        rect.height
                    );


                ripple.classList.add(
                    "ripple"
                );


                ripple.style.width =
                    `${size}px`;

                ripple.style.height =
                    `${size}px`;


                ripple.style.left =
                    `${event.clientX -
                        rect.left -
                        size / 2}px`;


                ripple.style.top =
                    `${event.clientY -
                        rect.top -
                        size / 2}px`;


                this.appendChild(
                    ripple
                );


                setTimeout(
                    () => ripple.remove(),
                    600
                );

            }
        );

    });


    /* =========================================================
       14. BACK TO TOP
    ========================================================= */

    const backTop =
        document.getElementById(
            "backTop"
        );


    window.addEventListener(
        "scroll",
        () => {

            if (window.scrollY > 500) {

                backTop.classList.add(
                    "show"
                );

            } else {

                backTop.classList.remove(
                    "show"
                );

            }

        }
    );


    backTop.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

            setActiveLink("#home");

        }
    );


});
