STYLING IN REACT 
    -just in CSS
    -scoping in CSS
    - css in js
    - when there is a logic
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

    - after we have done this we can still go shi
    

