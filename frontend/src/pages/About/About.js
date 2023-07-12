import React from 'react'

import './About.css'

export default function About() {
    return (
        <div className="about-container">
            <h1 className="about-heading">About</h1>
            <div className="about-main">
                <p className="about-content">
                    This is an realtime AI based Yoga Trainer which detects your pose how well you are doing.
                    This AI first predicts keypoints or coordinates of different parts of the body(basically where
                    they are present in an image) and then it use another classification model to classify the poses if 
                    someone is doing a pose and if AI detects that pose more than 97% probability and then it will notify you are 
                    doing correctly(by making virtual skeleton green). We have used Tensorflow pretrained Movenet Model To Predict the 
                    Keypoints and building a neural network top of that which uses these coordinates and classify a yoga pose.

                    We have trained the model in python because of tensorflowJS we can leverage the support of browser so I converted 
                    the keras/tensorflow model to tensorflowJS.
                </p>
            </div>
        </div>
    )
}
