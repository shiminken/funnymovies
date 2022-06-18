import MainTemplate from "@/components/MainTemplate";
import {
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import React, { useCallback, useState } from "react";
import { Text, Button, FormInputGroup } from "ui-library";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { youtubeSchema } from "@/services/movieshare/schema";
import { useRouter } from "next/router";
import { getURL, getYoutubeId } from "@/utils/helpers";
import { updateMovieInfors } from "@/services/movieshare";
import { useUser } from "@/hooks/useUser";
import {
  ButtonStyled,
  ShareBoxWrapper,
  ShareWrapper,
  UrlWrapper,
  styles,
} from "../../../styles/movies.styled";

export type YoutubeLinkValue = {
  youtubeUrl: string;
};

const MovieToShare = () => {
  const [isLoading, setLoading] = useState(false);
  const [validate, setValidate] = useState<any>({});
  const [isOpenDialog, setOpenDialog] = React.useState(false);

  const { replace } = useRouter();
  const { userDetails } = useUser();

  const { handleSubmit, control } = useForm<YoutubeLinkValue>({
    resolver: yupResolver(youtubeSchema),
    defaultValues: {
      youtubeUrl: undefined,
    },
  });

  const handleClickOpen = useCallback(() => {
    setOpenDialog(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpenDialog(false);
  }, []);

  const onSubmit = React.useCallback(
    async (data: YoutubeLinkValue) => {
      try {
        setLoading(true);
        const youtubeId = getYoutubeId(data.youtubeUrl);

        await updateMovieInfors(youtubeId, userDetails?.email as string);
        handleClickOpen();
      } catch (error) {
        console.log("Error occur", error);
      } finally {
        setLoading(false);
      }
    },
    [handleClickOpen, userDetails?.email]
  );

  const _validationHandler = useCallback(
    (e: any) => {
      setValidate(e);
    },
    [setValidate]
  );

  const _resetValidation = useCallback(
    (key: string) => {
      const _validate = { ...validate, [key]: null };
      setValidate(_validate);
    },
    [validate, setValidate]
  );

  const renderDialog = useCallback(() => {
    return (
      <Dialog
        open={isOpenDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You just shared a Movie successfully. Your friend will be happy to
            see it with you. Do you want to continue?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            label={"Go Home"}
            type="submit"
            onClick={() => replace(getURL())}
          />
          <Button label={"Continue"} type="submit" onClick={handleClose} />
        </DialogActions>
      </Dialog>
    );
  }, [isOpenDialog, handleClose, replace]);

  return (
    <MainTemplate isHideRightSide isBack leftTitle="Share a Youtube movie">
      <ShareWrapper>
        <ShareBoxWrapper>
          <UrlWrapper>
            <Text style={styles.youtubeText}>Youtube url:</Text>

            <FormInputGroup
              control={control}
              required
              name="youtubeUrl"
              id="youtubeUrl"
              placeholder="Paste youtube url here"
              style={styles.formInput}
              errMessage={validate?.youtubeUrl?.message}
              resetValidate={() => _resetValidation("youtubeUrl")}
            />
          </UrlWrapper>

          {isLoading ? (
            <CircularProgress size={20} style={styles.indicator} />
          ) : (
            <ButtonStyled
              label={"Share"}
              type="submit"
              onClick={handleSubmit(onSubmit, _validationHandler)}
              disabled={isLoading}
            />
          )}
        </ShareBoxWrapper>
        {renderDialog()}
      </ShareWrapper>
    </MainTemplate>
  );
};

export default MovieToShare;
