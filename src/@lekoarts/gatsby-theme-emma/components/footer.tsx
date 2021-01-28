/** @jsx jsx */
import { Box, Link, Flex, jsx } from "theme-ui"

const Footer = () => (
  <Box as="footer" variant="layout.footer">
    Copyright &copy; {new Date().getFullYear()}. All rights reserved.
    <br />
  </Box>
)

export default Footer
