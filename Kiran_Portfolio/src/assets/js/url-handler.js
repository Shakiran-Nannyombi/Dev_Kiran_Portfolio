// Function to handle URL changes
function handleUrlChange(linkId, newUrl) {
    document.getElementById(linkId).addEventListener("click", function(e) {
        setTimeout(() => {
            history.pushState(null, "", newUrl);
        }, 100);
    });
}

// Handle desktop navigation links
handleUrlChange("homeLink", "/home");
handleUrlChange("aboutLink", "/about");
handleUrlChange("skillsLink", "/skills");
handleUrlChange("projectsLink", "/projects");
handleUrlChange("experienceLink", "/experience");
handleUrlChange("servicesLink", "/services");
handleUrlChange("contactLink", "/contact");
handleUrlChange("blogLink", "/blog");

// Handle mobile navigation links
handleUrlChange("mobileHomeLink", "/");
handleUrlChange("mobileAboutLink", "/about");
handleUrlChange("mobileSkillsLink", "/skills");
handleUrlChange("mobileProjectsLink", "/projects");
handleUrlChange("mobileExperienceLink", "/experience");
handleUrlChange("mobileServicesLink", "/services");
handleUrlChange("mobileContactLink", "/contact");
handleUrlChange("mobileBlogLink", "/blog"); 