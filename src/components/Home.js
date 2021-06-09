import React from 'react'
import styled from "styled-components"
import Section from "./Section"
function home() {
    return (
        <Container>
            <Section
                title="Model S"
                description="Order Online fro Touchless Delivery"
                backgroundImg="model-s.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Model Y"
                description="Order Online fro Touchless Delivery"
                backgroundImg="model-y.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Model 3"
                description="Order Online fro Touchless Delivery"
                backgroundImg="model-3.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Model X"
                description="Order Online fro Touchless Delivery"
                backgroundImg="model-x.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Lowest Cost Solar Panels in America"
                description="Money-back Guarantee"
                backgroundImg="solar-panel.jpg"
                leftBtnText="Order Now"
                rightBtnText="Learn More"
            />
            <Section
                title="Solar for New Roofs"
                description="Solar Roof Less Than A new Roof Plus Solar Panels"
                backgroundImg="solar-roof.jpg"
                leftBtnText="Order Now"
                rightBtnText="Learn More"
            />
            <Section
                title="Accessories"
                description="Extra Items"
                backgroundImg="accessories.jpg"
                leftBtnText="Shop Now"
                
            />
        </Container>
    )
}

export default home

const Container = styled.div`
    height: 100vh;
    z-index:10;
`
