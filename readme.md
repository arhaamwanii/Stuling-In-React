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
    -also  in here if you were to target inner ones use  & insted of wrapper naem 
    











    



