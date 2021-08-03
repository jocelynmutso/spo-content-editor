# The Stencil CMS Guide 

## Contents

* [Introduction](#Introduction)
* [Features](#Features)
  * [Articles](#Articles)
  * [Pages](#Pages)
  * [Links](#Links)
  * [Forms and Workflows](#Forms-and-workflows)
  * [Localisations](#Localisations)
  * [Releases](#Releases)
* [Creating your first resources](#Creating-your-first-resources)
* [Deleting and removing resources](#Deleting-and-removing-resources)



### Introduction

The Stencil is a content management system designed for composing and managing static content in multiple languages via [Markdown](https://www.markdownguide.org/). 

This platform unifies and consolidates your content, data gathering, and process automation under one roof. 

Core Philsophies:

**Multi-language content creation should be efficient and simple.**  

These days, multi-language content creation and management is critical. Everything about The Stencil is meant to streamline content creation and translation processes.  A great example of this is that, with the Stencil, content translators can view the source language and edit the target language via a split-screen view, saving time and energy from switching screens or editors.  

**Content creators shouldn't need to micromanage their content in several different places simultaneously.**  

The Stencil lets you set up your translations, links, languages, and workflows once, and apply these resources and their translations globally. If you need to change a link text, you do it in **one** place only, and the changes apply wherever that link is used. Or perhaps you have a form that appears in multiple place across your content application. You can update that form and it will be changed / removed everywhere. This gives you more time to focus on composing with less worry about "...did I update that everywhere?"

**Data gathering and process automation are essential elements of a complete CMS solution**  

Presenting users with content is great. What's even better is giving users possibilities to act on that content and designing processes to act upon that data. The Stencil integrates with two other platforms to provide form service and process services. We believe that organisations should be able to control all three of these elements in order to craft the perfect solution to meet their needs.

**Version control is essential.**  

Keeping both a single source of truth and an audit history of changes saves time and effort.

---

### Features

* Simple, multi-language content composition with Markdown syntax
* Simultaneous, side-by-site content editing for two languages
* Integrate forms and their workflows into static content
* Versioning and release management system
* Localise all content, including links, forms, and workflows

---

## Basic User Guide

The Stencil is comprised of six different elements, which we can refer to as "Resources". These resources are as follows:

* **Articles**: Containers for grouping related resources  
* **Pages**: Localised Markdown content, directly connected to Articles   
* **Links**: Localised internal or external links  
* **Localisations**: Available languages for content  
* **Releases**: Versions / Snapshots of complete content state at one point in time
* **Workflows**: Localised forms and processes connected to Articles / Pages



![The Stencil Basic Structure](stencil-structure.png)

### Articles

Articles can be thought of as containers for grouping related elements. 

An Article **must** have a name (customisable) and at least one page. This name is purely technical and does not appear on the end-user side.

An Article **should** have a three-digit number in front of it. This number determines the order it is displayed in the menu.

Example of an Article with name and order number: `100_Housing`

An Article **may** have Links and Workflows associated with it.

Articles can be nested up to **two** levels. This means you can have one Parent Article and its Child Article.  Here is an example of a nested Article:

`150_Construction/100_Building_Permits`

Article display names on the end-user side are taken from the first Markdown Level 1 Header in each Page. 


Here is an example situation: You have an Article with two Pages: `en.md` and `et.md`. You want this article to appear to end-users with the name "Animals", but you want to be sure that, if a user has selected the Estonian language, the Estonian word appears instead of English. To do this, you simply give each Page a Level 1 Header with the appropriate name, and the system picks it up.

en.md

```markdown

# Animals

```

et.md

```markdown

# Loomad

```


---

### Pages  

Pages are Markdown files corresponding to their content language. For example, a page named `en.md` contains English language content.  

The basic rule is this: 1 page == 1 language. You can have as many pages per Article as you wish, depending on how many languages you need to represent.

A Page does not have a customisable name. The name of a page is always the [two-letter language code](https://en.wikipedia.org/wiki/ISO_639-1) corresponding to its content language, followed by `.md` file extension. 

A Page is specific to an Article, and it cannot exist outside of an Article.

---

### Links

Links can be internal or external. An internal link connects to pages within your domain, while an external link connects to pages outside your domain.

Links can be associated with unlimited multiple articles / pages. 

Link content (url, description, etc.) are all localised. The locale you specify for a link determines that this link will appear only on pages with the same locale. Here is an example situation:

You have an article: `100_Housing`.  This Article has two pages: `en.md` and `sv.md`. You create a link and set its locale to `en`. You then associate this link with your Article `100_Housing`. Your link will only appear on `en.md`, even though it was applied to the entire Article. If you want this link to appear on `sv.md`, you can give the link this additional localisation.

If you want a link to appear on ALL pages of an Article, regardless of language, you simply leave the locale field blank.  

Once a link has been created, it is available globally throughout the application.
 

---

### Forms and Workflows

The Stencil is designed to unify your content, data gathering, and process automation into one consolidated frontend. In practice, this means that you can set up your static content to point users to your forms, and you can create workflows which specify what happens once those forms are submitted.

For example, your organisation may want to provide a form for users to send an inquiry about a product, and then when a user completes and submits the inquiry form, a notification is sent to an administrator who then performs some action. Or, perhaps something automated should happen when this form is completed. This is all up to you to customise however you need. 

---

### Localisations

Localisations provide you with the ability to define the languages for your content. You can defined as many locales as you wish. 

Locales are created by specifying the [two-letter language code](https://en.wikipedia.org/wiki/ISO_639-1) of the desired language.

Once a locale has been created, it is available globally throughout the application. You can then start creating / associating content such as pages, links, etc. with this locale.

The Stencil also provides a "Locale Usage Overview" where you can quickly and easily see which Articles have Pages (or don't have) for each of your activated languages.

---

### Releases

With versioning and releases, you can keep a history of your content throughout time.  When you make a release in The Stencil, you create a snapshot of your **entire** content state at that point in time. Then, you can apply that release, whether it is a test or a production release. 

If it turns out that your release isn't what you were expecting, you can easily revert back to a previous release. 

---

## Creating your first resources

1. Create an Article
2. Select the Locale of the first Page for this Article.
3. Now that you have an Article with a Page, you can start editing your Markdown content.
4. Links, Workflows, and additional Locales are added globally. You can add these in whatever order you wish. 
5. Once Links / Workflows have been created, you can "associate" them with Articles and Pages. 
6. Once a Locale has been created, it can be applied to new Pages.
7. When your content is ready, make a new Release. Give it a name and an optional note, and you're ready for publishing.

## Deleting and Deactivating resources


**Important Notes**:

**Deleting** is a global action. The deleted Resource will no longer be available.  
**Deactivating** is specific to one Resource or a Resource Association. The Resource will still be globally available if you want to use it again later, but it will be hidden from the end-user point of view.

* **Article**: Articles are deleted globally via the "Articles" menu option.  
* **Page**: Because Pages cannot exist outside of Articles, they are deleted from their article via the "Articles" menu option.  

Note that when you delete an Article, you also delete **all pages** associated with that Article.

* **Link**: Links are deleted globally via the "Links" menu option. 
 
Link / Article associations are deactivated via the "Links" menu option.  

* **Workflow**: Workflows are deleted globally via the "Workflows" menu option.

Workflow / Article associations are deactivated via the "Workflows" menu option.


* **Locale**: Locales are deleted globally via the "Locales" menu option.

Locales can be set to "Active" or "Deactivated". If a locale is set to Deactivated, all Resources of that locale will be invisible on the end-user side.  This can be done via the "Locales" menu option.


* **Release**: Releases cannot be deleted or edited once they are created.

Previous Releases can be activated if you need to revert to a previous version. They can also be viewed. 


