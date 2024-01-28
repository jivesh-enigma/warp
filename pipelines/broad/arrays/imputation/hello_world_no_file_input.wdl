version 1.0

workflow HelloWorld {
    input {
        Int scatter_num
    }

    scatter (i in range(scatter_num)) {
        call WriteGreeting
    }

    output {
        Array[File] output_file = WriteGreeting.output_greeting
    }
}

task WriteGreeting {
    String ubuntu_docker = "ubuntu:20.04"
    command {
        echo "Hello World"
    }
    runtime {
        docker: ubuntu_docker
        disk: "50 GB"
        memory: "2000 MiB"
        cpu: 1
    }
    output {
        # Write output to standard out
        File output_greeting = stdout()
    }
}
