use std::str::FromStr;
#[derive(Debug)]
pub enum Error {
    ReadError
}

pub fn read_entire<T>(filepath: &str) -> Result<T, Error>
    where T : FromStr {
    if let Ok(filestr) = std::fs::read_to_string(filepath) {
        match filestr.parse::<T>() {
            Ok(file) => Ok(file),
            Err(_)   => Err(Error::ReadError)
        }
    }
    else { Err(Error::ReadError) }
}