STYLING IN REACT 
    -just in CSS
    -scoping in CSS
    - css in js
    - when there is a logic
    - styled components
    - Tailwind CSS

co-locating the files to one another will make different STYLE TAGS in the head section

VANILLA CSS

    - css is out of the jsx code
    - vanilla css : is not scoped

    - rules are used in the whole app

    - even if you cross imports : they are still applied globally
    - for bigger projects this is a going to be a problim

    ADDING SCOPING TO VANILLA
        
    - add INLINE CSS
        adding css in inLine require passing of the STYLES as Object ->  {{}}
        then we add the css in the objects
        EG:{{
            color: "red"
        }}

        - all the names with the "-" in between or space like == text-align
        - would have to be written as textAlign

        -scoping achieved using inline css

        DYNAMIC STYLING IS EASY
        small conditions can add up to a LOT LOT

        style={{
            color = trueOrFalse ? 'red' : 'black'
        }}
        //conditional adding styles


    - scoping for external css
        - we simply put a condition on the class Name
        - we mainty use the Template literall to set up add perminent and conditional  content together
        
        {`className1 ${condition ? ifTrue : ifFalse} className2`}

CSS MODULES 

    main thing with them is there scoping 

    - need to be implemented by the BUILDER
    -  file named differently - name.moudule.css
    - import differntly (import objectName from "./name.module.css")
    - used differety we don't use it directly istead we use the
        objectName.style

    - after all this done two files which are interconnected like this there css classes would be renamed at the time of deplyment
    - if we put in the same name class into any other file that won't do anything


STYLED COMPONENTS (package)

    - we make these small wrappers which we then go ahead add instead of the actaull html wrappers
    -Little wrapper Condtitionally

    -const ControlledCotainer  = styled.div`
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin-bottom: 1.5rem;
        `

    then we go ahead and use Controlled Container as the werpper 

    - they are scoped to the COMPONENT they are built in 

    - we can export them as the const and then also use them in other componenets as well

    DYNAMIC STYLING

    while naming the Const you have to make it capital -- other wise it will resemble with the : here is the thing 

    inorder to style dynamically we need to use a 
    - getting the condition/value we have to check for -  in using porps
    - then cheking for the condition 
    - using template lieteralls because all of this is happening inside of these backTicks
    - inside we launch an anounymous function within that anonymous function - we will automtically reicive the props in that function we then have to use them either by de-sturcturing or using the prop attribute rename them directly 
        
    -- PROPERTY NAME ${(props) => props.inputCheck ? "red" : "blue"}  --

    - these prop name must not cash with the inbuilt prop names


    MEDIA QUERRIES AND PDEUSDOCOMPONENTS: like hover

    you don't need to convert the every minor element into styling comonent 
    - convert the wrapping elements then after 
    - use the syntaz of "header h1" but insted of the wrapping element naem you use "&"

    MEDIA QUERRIES
    you just put the media querrie in the styles and they will automatically detect it is the quesrry for them
    -also  in here if you were to target inner ones use  & insted of wrapper name 

in case of bigger apps

    - we can outsource the whole button : into an component with the styled components
        - specially in the case of  reusable components such as button
        -just import the component 
        -and use it 

    - export where i will return syled label here on regular function who is the main in to the main thing we are two of 

    - i take the broweser url
    - make a source and make it fit and set the quality and timming
    - make the time match with the current one
    - get a blank page
    - show the timer over it 
        -timer will suck

-Quick in the same

TAILWIND
    - adding a lot of small classes:
    - you don't need to know css to use tailwind

CUSTOMIZING TAILWIND
    - cofigure the config file

USING PSEUDO SELECTORS AND MEDIA QUERRIES 
    -prefixies eg::  md:w-26 - only do width 26 when screen is middle size

PROS AND CONS
    PROS
    -you don't have to know tailwind
    - memorize the most utilisty calsses
    - styling is easy 
    - style classes : you avoid clashes

    CONS
    -end up with large list of classes
    -jsx and css together 
    - end up with wrappers 

DYNAMIC OR CONDITIONAL STYLES
    - what we do is we take the class names shov them. up the ass of an variable 
    - then we put in an if check to udate the vaiable with the new classes  and give the check an condition
    - then we use this variable in the class name section and there we have our class name dynamically

DEBUGGING

    Debugging
    value seems to be alternative it is recieved as does recive the first element never execurte

    in js if you return some thing early on inside of a if check or something that is what will be shown to the end user if the condition is fullfilled

    and code after that won't be executed

well be have a thing

LOGICAL ERRORS

    which part coud be responsible

    we are going to go with session one the
    so what - ok - seems to be related to us fetching the user all the one that are  one of the main thing

    but all browswers are going to have this there is a src setup to show you - it also contains we can also place paused in debuggers

    so that it brakes again that is the problim when you can one of the everything is messed up here alr we are here for one of the main thing is that we are going to do it we can see that

    we are seeing long concaitendated strings

    there is a src that can be used by the browser here into in the first one file it contains the

    number + strings together can lead to error 

REACT STRICT MODE
    - built in component in React
    - mainly wraps other components

    - it is only applicable during the development process not after the Build

    - it will execute the code twice


REACT DEV TOOLS

    - components:
        shows you the component tree, which contains all the component
        -can provide a ui for ehancing of state variable
        - we can update and different state values and also different values of the props to see the chnages live the UI
        - quick updation of all the values - for different variables and stuff

    - profiler  
        mainly used for performanace enhace





