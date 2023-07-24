import {
  DxcApplicationLayout,
  DxcFlex,
  DxcBox,
  DxcInset,
  DxcHeading,
  DxcParagraph,
  DxcLink,
  DxcTextInput,
  DxcButton,
  DxcTypography,
} from "@dxc-technology/halstack-react";

import "./App.css";
const SearchServices = () => {
  return (
    <DxcInset space="0rem" horizontal="4rem">
      <DxcBox size="fillParent">
        <DxcFlex grow={1} direction="column">
          <DxcInset space="0rem" vertical="2rem" horizontal="3rem">
            <DxcInset space="0rem" bottom="3rem">
              <DxcHeading text="All services" level={3} />
            </DxcInset>
            <DxcTextInput
              placeholder="Search a product from your solution..."
              size="fillParent"
            />
            <DxcInset space="0rem" top="3rem">
              <DxcFlex direction="row" gap="5rem">
                <DxcFlex direction="column">
                  <DxcHeading text="Without group" level={4} />
                  <DxcLink href="#">Billing Payment</DxcLink>
                  <DxcLink href="#">Billing Payment2</DxcLink>
                  <DxcLink href="#">Billing Payment3</DxcLink>
                </DxcFlex>
                <DxcFlex direction="column">
                  <DxcHeading text="Billing" level={4} />
                  <DxcLink href="#">Link</DxcLink>
                </DxcFlex>
                <DxcFlex direction="column">
                  <DxcHeading text="Policy" level={4} />
                  <DxcLink href="#">Link</DxcLink>
                  <DxcLink href="#">Link</DxcLink>
                  <DxcLink href="#">Link</DxcLink>
                </DxcFlex>
              </DxcFlex>
            </DxcInset>
          </DxcInset>
        </DxcFlex>
      </DxcBox>
    </DxcInset>
  );
};
const MainServices = () => {
  return (
    <DxcFlex alignSelf="center">
      <DxcBox shadowDepth={0} size="fillParent">
        <DxcInset space="0rem" horizontal="5rem" top="5rem">
          <DxcFlex direction="column">
            <DxcHeading
              text="DXC Technology - Assure Platform Console"
              level={1}
            />
            <DxcInset space="0rem" vertical="5rem">
              <DxcFlex gap="3rem">
                <DxcBox shadowDepth={0}>
                  <DxcFlex direction="column" gap="0.25rem">
                    <DxcParagraph>Billing payments</DxcParagraph>
                    <DxcHeading text="Billing Payments" level={2} />
                    <DxcLink
                      icon="https://img.icons8.com/ios-glyphs/30/000000/arrow.png"
                      iconPosition="after"
                    >
                      Billing payments
                    </DxcLink>
                  </DxcFlex>
                </DxcBox>
                <DxcBox shadowDepth={0}>
                  <DxcFlex direction="column" gap="0.25rem">
                    <DxcParagraph>
                      User profile management for your applications
                    </DxcParagraph>
                    <DxcHeading text="Realms Configuration" level={2} />
                    <DxcLink
                      icon="https://img.icons8.com/ios-glyphs/30/000000/arrow.png"
                      iconPosition="after"
                      newWindow={false}
                    >
                      Start configuring users
                    </DxcLink>
                  </DxcFlex>
                </DxcBox>
                <DxcBox shadowDepth={0}>
                  <DxcFlex direction="column" gap="0.25rem">
                    <DxcParagraph>Financials for Life and P&C</DxcParagraph>
                    <DxcHeading text="Financials for Life and P&C" level={2} />
                    <DxcLink
                      icon="https://img.icons8.com/ios-glyphs/30/000000/arrow.png"
                      iconPosition="after"
                    >
                      Financials for Life and P&C
                    </DxcLink>
                  </DxcFlex>
                </DxcBox>
              </DxcFlex>
            </DxcInset>
          </DxcFlex>
        </DxcInset>
      </DxcBox>
    </DxcFlex>
  );
};
function App() {
  return (
    <>
      {/* <DxcApplicationLayout
        sidenav=""
        header={
          <DxcApplicationLayout.Header
            underlined={true}
            content={
              <DxcFlex justifyContent="flex-end" gap="1.5rem">
                <DxcButton
                  size="small"
                  mode="text"
                  icon="https://img.icons8.com/?size=512&id=98956&format=png"
                />
                <DxcButton
                  size="small"
                  mode="text"
                  icon="https://img.icons8.com/?size=512&id=101759&format=png"
                />
                <DxcApplicationLayout.Header.Dropdown
                  options={[
                    { value: "1", label: "Edit profile" },
                    { value: "2", label: "Sign out" },
                  ]}
                  label="User"
                  icon="https://img.icons8.com/?size=512&id=98957&format=png"
                />
              </DxcFlex>
            }
          />
        }
        footer={
          <DxcApplicationLayout.Footer
            socialLinks={[
              {
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png",
                href: "https://www.linkedin.com/company/dxctechnology",
              },
              {
                logo: "https://i.pinimg.com/originals/4f/50/8c/4f508c71a45d9201f9e4a34e6ebedea0.png",
                href: "https://twitter.com/dxctechnology",
              },
              {
                logo: "https://www.freepnglogos.com/uploads/facebook-logo-design-1.png",
                href: "https://www.facebook.com/DXCTechnology/",
              },
            ]}
          />
        }
      >
        <DxcApplicationLayout.Main>
          <DxcInset space="0rem" bottom="3rem">
            <DxcTypography>
              <DxcFlex direction="column">
                <DxcFlex alignSelf="center">
                  <DxcBox shadowDepth={0} size="fillParent">
                    <DxcInset space="0rem" horizontal="5rem" top="5rem">
                      <DxcFlex direction="column">
                        <DxcHeading
                          text="DXC Technology - Assure Platform Console"
                          level={1}
                        />
                        <DxcInset space="0rem" vertical="5rem">
                          <DxcFlex gap="3rem">
                            <DxcBox shadowDepth={0}>
                              <DxcFlex direction="column" gap="0.25rem">
                                <DxcParagraph>Billing payments</DxcParagraph>
                                <DxcHeading text="Billing Payments" level={2} />
                                <DxcLink
                                  href="#"
                                  icon="https://img.icons8.com/ios-glyphs/30/000000/arrow.png"
                                  iconPosition="after"
                                >
                                  Billing payments
                                </DxcLink>
                              </DxcFlex>
                            </DxcBox>
                            <DxcBox shadowDepth={0}>
                              <DxcFlex direction="column" gap="0.25rem">
                                <DxcParagraph>
                                  User profile management for your applications
                                </DxcParagraph>
                                <DxcHeading
                                  text="Realms Configuration"
                                  level={2}
                                />
                                <DxcLink
                                  icon="https://img.icons8.com/ios-glyphs/30/000000/arrow.png"
                                  iconPosition="after"
                                  newWindow={false}
                                >
                                  Start configuring users
                                </DxcLink>
                              </DxcFlex>
                            </DxcBox>
                            <DxcBox shadowDepth={0}>
                              <DxcFlex direction="column" gap="0.25rem">
                                <DxcParagraph>
                                  Financials for Life and P&C
                                </DxcParagraph>
                                <DxcHeading
                                  text="Financials for Life and P&C"
                                  level={2}
                                />
                                <DxcLink
                                  href="#"
                                  icon="https://img.icons8.com/ios-glyphs/30/000000/arrow.png"
                                  iconPosition="after"
                                >
                                  Financials for Life and P&C
                                </DxcLink>
                              </DxcFlex>
                            </DxcBox>
                          </DxcFlex>
                        </DxcInset>
                      </DxcFlex>
                    </DxcInset>
                  </DxcBox>
                </DxcFlex>
                <DxcInset space="0rem" horizontal="4rem">
                  <DxcBox size="fillParent">
                    <DxcFlex grow={1} direction="column">
                      <DxcInset space="0rem" vertical="2rem" horizontal="3rem">
                        <DxcInset space="0rem" bottom="3rem">
                          <DxcHeading text="All services" level={3} />
                        </DxcInset>
                        <DxcTextInput
                          placeholder="Search a product from your solution..."
                          size="fillParent"
                          // action={[object Object]}
                        />
                        <DxcInset space="0rem" top="3rem">
                          <DxcFlex direction="row" gap="5rem">
                            <DxcFlex direction="column">
                              <DxcHeading text="Without group" level={4} />
                              <DxcLink href="#">Billing Payment</DxcLink>
                              <DxcLink href="#">Billing Payment2</DxcLink>
                              <DxcLink href="#">Billing Payment3</DxcLink>
                            </DxcFlex>
                            <DxcFlex direction="column">
                              <DxcHeading text="Billing" level={4} />
                              <DxcLink href="#">Link</DxcLink>
                            </DxcFlex>
                            <DxcFlex direction="column">
                              <DxcHeading text="Policy" level={4} />
                              <DxcLink href="#">Link</DxcLink>
                              <DxcLink href="#">Link</DxcLink>
                              <DxcLink href="#">Link</DxcLink>
                            </DxcFlex>
                          </DxcFlex>
                        </DxcInset>
                      </DxcInset>
                    </DxcFlex>
                  </DxcBox>
                </DxcInset>
              </DxcFlex>
            </DxcTypography>
          </DxcInset>
        </DxcApplicationLayout.Main>
      </DxcApplicationLayout> */}
      <DxcApplicationLayout
        header={
          <DxcApplicationLayout.Header
            underlined={true}
            content={
              <DxcFlex justifyContent="flex-end" gap="1.5rem">
                <DxcButton
                  size="small"
                  mode="text"
                  icon="https://img.icons8.com/?size=512&id=98956&format=png"
                />
                <DxcButton
                  size="small"
                  mode="text"
                  icon="https://img.icons8.com/?size=512&id=101759&format=png"
                />
                <DxcApplicationLayout.Header.Dropdown
                  options={[
                    { value: "1", label: "Edit profile" },
                    { value: "2", label: "Sign out" },
                  ]}
                  label="User"
                  icon="https://img.icons8.com/?size=512&id=98957&format=png"
                />
              </DxcFlex>
            }
          />
        }
        footer={
          <DxcApplicationLayout.Footer
            socialLinks={[
              {
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png",
                href: "https://www.linkedin.com/company/dxctechnology",
              },
              {
                logo: "https://i.pinimg.com/originals/4f/50/8c/4f508c71a45d9201f9e4a34e6ebedea0.png",
                href: "https://twitter.com/dxctechnology",
              },
              {
                logo: "https://www.freepnglogos.com/uploads/facebook-logo-design-1.png",
                href: "https://www.facebook.com/DXCTechnology/",
              },
            ]}
          />
        }
      >
        <DxcApplicationLayout.Main>
          <DxcInset space="0rem" bottom="3rem">
            <DxcTypography>
              <DxcFlex direction="column">
                <MainServices />
                <SearchServices />
              </DxcFlex>
            </DxcTypography>
          </DxcInset>
        </DxcApplicationLayout.Main>
      </DxcApplicationLayout>
    </>
  );
}

export default App;
