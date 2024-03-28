version 1.0

# testing ToA and write_lines([]) as task input
workflow test_empty_write_lines_input {

  input {
    File write_lines_at_wdl_input = write_lines([])
    File? undefined_file
  }

  # use file defined at wdl input
  call LocalizeFile as LocalizeEmptyFileFromWdlInput {
    input:
      input_file = write_lines_at_wdl_input
  }

  # use file defined at task input
  call LocalizeFile as LocalizeEmptyFileFromTaskInput {
    input:
      input_file = write_lines([])
  }

  # use file with select_first
  call LocalizeFile as LocalizeEmptyFileWithSelectFirst {
    input:
      input_file = select_first([undefined_file, write_lines([])])
  }

  # use file generated in an if block
  Boolean run_block = false
  if (run_block) {
    File file_from_block = write_lines(["foo"])
  }
  call LocalizeFile as LocalizeEmptyFileWithIfBlock {
    input:
      input_file = select_first([file_from_block, write_lines(["foo"])])
  }
}

task LocalizeFile {
  input {
    File input_file
  }
    
  command <<<
    set -euo pipefail

    cat ~{input_file} | wc -l > num_lines.txt
  >>>

  runtime {
    docker: "ubuntu:20.04"
    memory: "2 GiB"
    cpu: "1"
    disks: "local-disk 8 HDD"
  }

  output {
    Int num_lines = read_int("num_lines.txt")
  }
}
