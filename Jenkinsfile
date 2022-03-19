node {

    checkout scm

    docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {

        def customImage = docker.build("iappstudio4/hotel-app")

        /* Push the container to the custom Registry */
        customImage.push()
    }
}
