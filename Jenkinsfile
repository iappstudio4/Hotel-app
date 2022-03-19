node {

    checkout scm

    docker.withRegistry('https://registry.hub.docker.com', 'dockerHub') {

        def customImage = docker.build("iappstudio4/Hotel-app")

        /* Push the container to the custom Registry */
        customImage.push()
    }
}
